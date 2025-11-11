import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlusCircle, Star, Zap, Book, Globe, Heart, Atom, Clapperboard, Music, Landmark, Code, BookOpen, Link } from 'lucide-react';
import { getRanking } from '../../services/Api';
import { SideBarComponent } from '../../components/Sidebar';
import {
    PageContainer,
    Content,
    Header,
    Title,
    SubTitle,
    MainSection,
    SectionTitle,
    CategoryGrid,
    CategoryCard,
    CardHeader,
    CardTitle,
    CardSubText,
    RankingBox,
    RankingItem,
    ShareSection,
    ShareButton,
} from './style.jsx';

const ALL_CATEGORIES = [
    { nome: "Conhecimento Geral", icone: Star, id: 9, foco: true },
    { nome: "Matemática", icone: Zap, id: 19, foco: true },
    { nome: "Ciências", icone: Atom, id: 17, foco: true },
    { nome: "Português", icone: Book, id: 27, foco: false },
    { nome: "História", icone: Landmark, id: 23, foco: false },
    { nome: "Geografia", icone: Globe, id: 22, foco: false },
    { nome: "Filmes", icone: Clapperboard, id: 11, foco: false },
    { nome: "Música", icone: Music, id: 12, foco: false },
    { nome: "Tecnologia", icone: Code, id: 18, foco: false },
    { nome: "Livros", icone: BookOpen, id: 10, foco: false },
    { nome: "Artes & Cultura", icone: Heart, id: 25, foco: false },
];

export function Home() {

    const navigate = useNavigate();

    const [loggedUser, setLoggedUser] = useState(null);
    const [ranking, setRanking] = useState([]);
    const [loadingRanking, setLoadingRanking] = useState(true);
    const [search, setSearch] = useState('');
    const [copyFeedback, setCopyFeedback] = useState('');

    const loadRanking = useCallback(async () => {
        setLoadingRanking(true);
        try {
            const data = await getRanking();
            setRanking(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Erro ao carregar ranking:", error.message);
            setRanking([]);
        } finally {
            setLoadingRanking(false);
        }
    }, []);

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (userData) {
            try {
                setLoggedUser(JSON.parse(userData));
            } catch {
                localStorage.removeItem('user');
            }
        }
        loadRanking();
    }, [loadRanking]);

    const userName = loggedUser?.nome ?? null;
    const rankingTop = ranking.slice(0, 3);

    const filteredCategories = ALL_CATEGORIES.filter((area) =>
        area.nome.toLowerCase().includes(search.toLowerCase())
    );

    const categoriesToShow = search.length > 0
        ? filteredCategories
        : ALL_CATEGORIES.filter(cat => cat.foco);

    const handleCategoryClick = (categoryId) => {
        navigate('/categoria', { state: { categoryId: categoryId } });
    };

    const handleShareClick = async () => {
        const link = window.location.href;
        try {
            await navigator.clipboard.writeText(link);
            setCopyFeedback('Link copiado! Compartilhe o desafio. 🎉');
        } catch (err) {
            setCopyFeedback('Falha ao copiar. Copie manualmente: ' + link);
            console.error('Erro ao copiar:', err);
        } finally {
            setTimeout(() => setCopyFeedback(''), 3000);
        }
    };


    return (
        <PageContainer>
            <SideBarComponent loggedUser={loggedUser} />

            <Content>
                <Header>
                    <div>
                        <Title >
                            {userName ? `Seja bem-vindo ao QuizMaster, ${userName}!` : 'Boas-vindas ao QuizMaster!'}
                        </Title>
                        <SubTitle>Se acha inteligente? O QuizMaster vai te mostrar que não! Tente...</SubTitle>
                    </div>
                </Header>

                <MainSection>
                    <div style={{ flex: 1 }}>
                        <SectionTitle>
                            <Star size={24} fill="#ffc720" color="#ffc720" />
                            {search ? `Resultados da busca por "${search}"` : 'Categorias Populares'}
                        </SectionTitle>

                        <CategoryGrid>
                            {categoriesToShow.length > 0 ? (
                                categoriesToShow.map((area) => {
                                    const Icon = area.icone;
                                    return (
                                        <CategoryCard
                                            key={area.id}
                                            onClick={() => handleCategoryClick(area.id)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <CardHeader>
                                                <Icon size={30} />
                                            </CardHeader>

                                            <CardTitle>{area.nome}</CardTitle>
                                            <CardSubText>Jogue agora e ganhe pontos!</CardSubText>
                                        </CategoryCard>
                                    );
                                })
                            ) : (
                                <p style={{ color: '#FFCC00', fontStyle: 'italic', gridColumn: '1 / -1' }}>
                                    Nenhuma categoria encontrada para "{search}".
                                </p>
                            )}
                        </CategoryGrid>
                    </div>

                    <RankingBox>
                        <h2>Top 3 Jogadores</h2>

                        {loadingRanking ? (
                            <p style={{ textAlign: 'center', color: '#FFCC00' }}>Carregando ranking...</p>
                        ) : rankingTop.length > 0 ? (
                            rankingTop.map((user, i) => (
                                <RankingItem
                                    key={user.id}
                                    style={user.id === loggedUser?.id ? { border: '2px solid #00871B' } : {}}
                                >
                                    <span>{i + 1}º</span> {user.nome} - {user.pontos} pts
                                </RankingItem>
                            ))
                        ) : (
                            <p style={{ textAlign: 'center', color: '#FFCC00' }}>
                                Nenhum jogador encontrado no ranking.
                            </p>
                        )}
                    </RankingBox>
                </MainSection>

                <ShareSection>
                    <SectionTitle>
                        <Link size={24} color="#FFCC00" /> Participe e Compartilhe!
                    </SectionTitle>
                    <p>
                        Desafios são melhores com amigos! Compartilhe o QuizMaster e dispute o topo do ranking.
                    </p>
                    <ShareButton onClick={handleShareClick}>
                        🔗 Copiar Link para Compartilhar
                    </ShareButton>
                    {copyFeedback && (
                        <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#00871B' }}>
                            {copyFeedback}
                        </p>
                    )}
                </ShareSection>

            </Content>
        </PageContainer>
    );
}