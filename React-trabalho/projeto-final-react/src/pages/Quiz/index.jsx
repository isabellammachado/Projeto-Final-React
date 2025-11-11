import React, { useEffect, useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { quizApi } from '../../services/Api.jsx';
import { SideBarComponent } from '../../components/Sidebar';
import {
    Container, QuestionCard, OptionButton, QuestionTitle, Feedback,
    LoadingContainer, BackButton, ResultCard
} from './style.jsx';
import { CheckCircle, XCircle } from 'lucide-react';
import startSoundFile from '../../assets/sounds/start.mp3';
import correctSoundFile from '../../assets/sounds/correct.mp3';
import wrongSoundFile from '../../assets/sounds/wrong.mp3';
import { useAuth } from '../../hooks/useAuth';
import { addPoints } from '../../services/Api';

export function Quiz() {
    const [questions, setQuestions] = useState([]);
    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category');
    const difficulty = queryParams.get('difficulty');

    const startSound = useRef(new Audio(startSoundFile));
    const correctSound = useRef(new Audio(correctSoundFile));
    const wrongSound = useRef(new Audio(wrongSoundFile));
    const { usuario, editar } = useAuth();

    async function traduzirTexto(texto, lang = "PT") {
        try {
            const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=en|pt&de=rosah3677@gmail.com`;
            const response = await fetch(url);
            const data = await response.json();

            if (data?.responseData?.translatedText) {
                return data.responseData.translatedText;
            }

            if (data?.matches?.length > 0) {
                const melhorMatch = data.matches.reduce((melhor, atual) =>
                    atual.match > melhor.match ? atual : melhor
                );
                return melhorMatch.translation || texto;
            }

            return texto;
        } catch (error) {
            console.error("Erro na tradução:", error);
            return texto;
        }
    }

    async function traduzirPerguntas(perguntas) {
        if (!perguntas) return [];
        return await Promise.all(
            perguntas.map(async (questao) => ({
                ...questao,
                question: await traduzirTexto(questao.question),
                correct_answer: await traduzirTexto(questao.correct_answer),
                incorrect_answers: await Promise.all(questao.incorrect_answers.map(traduzirTexto)),
            }))
        );
    }

    useEffect(() => {
        const controller = new AbortController();

        async function loadQuestions() {
            try {
                setLoading(true);
                setError(null);

                const response = await quizApi.get(
                    `?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`,
                    { signal: controller.signal }
                );

                const results = response.data?.results;
                if (!results?.length) {
                    setError("Não foi possível carregar as perguntas. Tente novamente mais tarde.");
                    return;
                }

                const perguntasTraduzidas = await traduzirPerguntas(results);
                setQuestions(perguntasTraduzidas);

                startSound.current.play();
            } catch (err) {
                if (err.name !== 'CanceledError' && err.name !== 'AbortError') {
                    console.error(err);
                    setError("Erro ao carregar quiz. Tente novamente mais tarde.");
                }
            } finally {
                setLoading(false);
            }
        }

        loadQuestions();
        return () => controller.abort();
    }, [category, difficulty]);

    const handleAnswer = async (option) => {
        if (!questions[current] || feedback) return;

        setSelectedOption(option);
        const isCorrect = option === questions[current].correct_answer;

        if (isCorrect) correctSound.current.play();
        else wrongSound.current.play();

        setFeedback({
            type: isCorrect ? 'correct' : 'wrong',
            message: isCorrect ? 'Resposta correta! 🎉' : 'Resposta errada! ❌',
        });

        if (isCorrect) setScore(prev => prev + 1);

        setTimeout(async () => {
            setFeedback(null);
            setSelectedOption(null);

            if (isCorrect && usuario?.id) {
                try {
                    const resultado = await addPoints(usuario.id, 1);
                    editar({ pontos: resultado.newPoints });
                } catch (err) {
                    console.error("Erro ao atualizar pontos:", err);
                }
            }

            if (current + 1 >= questions.length) {
                setFinished(true);
            } else {
                setCurrent(prev => prev + 1);
            }
        }, 1500);
    };

    if (loading)
        return (
            <Container>
                <SideBarComponent />
                <LoadingContainer>
                    <div className="spinner"></div>
                    <p>Carregando perguntas...</p>
                </LoadingContainer>
            </Container>
        );

    if (error)
        return (
            <Container>
                <SideBarComponent />
                <QuestionCard>
                    <h2>{error}</h2>
                    <BackButton onClick={() => navigate('/categoria')}>Voltar às Categorias</BackButton>
                </QuestionCard>
            </Container>
        );

    if (!questions.length)
        return (
            <Container>
                <SideBarComponent />
                <QuestionCard>
                    <h2>Nenhuma pergunta disponível.</h2>
                    <BackButton onClick={() => navigate('/categoria')}>Voltar às Categorias</BackButton>
                </QuestionCard>
            </Container>
        );

    const currentQuestion = questions[current];
    const options = [
        ...(currentQuestion?.incorrect_answers || []),
        currentQuestion?.correct_answer
    ].filter(Boolean).sort(() => Math.random() - 0.5);

    return (
        <Container>
            <SideBarComponent />
            {!finished ? (
                <QuestionCard>
                    {feedback && (
                        <Feedback type={feedback.type}>
                            {feedback.type === 'correct' ? <CheckCircle size={32} /> : <XCircle size={32} />}
                            <span>{feedback.message}</span>
                        </Feedback>
                    )}

                    <QuestionTitle>
                        {current + 1}. {currentQuestion?.question || "Pergunta indisponível"}
                    </QuestionTitle>

                    {options.map((option, i) => {
                        let bgColor = '';
                        if (selectedOption) {
                            if (option === currentQuestion.correct_answer) bgColor = '#22c55e';
                            else if (option === selectedOption && selectedOption !== currentQuestion.correct_answer) bgColor = '#ef4444';
                        }
                        return (
                            <OptionButton
                                key={i}
                                onClick={() => handleAnswer(option)}
                                disabled={!!selectedOption}
                                style={{ backgroundColor: bgColor }}
                            >
                                {option}
                            </OptionButton>
                        );
                    })}
                </QuestionCard>
            ) : (
                <ResultCard>
                    <h2>Quiz Finalizado!</h2>
                    <p>
                        Você acertou {score} de {questions.length} perguntas!
                    </p>
                    <BackButton onClick={() => navigate('/categoria')}>Voltar às Categorias</BackButton>
                </ResultCard>
            )}
        </Container>
    );
}