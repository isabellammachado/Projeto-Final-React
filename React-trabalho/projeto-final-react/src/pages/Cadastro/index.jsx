import React, { useState } from 'react';
import { User, Mail, Lock, Calendar, Loader, UserPlus } from 'lucide-react';
import { useNavigate } from 'react-router';
import { findUserByEmail, registerNewUser } from '../../services/Api.jsx';
import {
    AuthContainer, AuthCard, Title, SubTitle, Form, InputGroup,
    PrimaryButton, FooterText, AuthLink
} from './style.jsx';

export function Cadastro() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const existingUser = await findUserByEmail(email);
            if (existingUser) {
                setError('Este email já está cadastrado.');
                return;
            }

            const newUser = await registerNewUser({ nome, email, password, dataNasc, pontos: 0 });

            localStorage.setItem('user', JSON.stringify(newUser));

            console.log('Cadastro bem-sucedido');
            navigate('/login');

        } catch (err) {
            console.error("Erro completo na tentativa de cadastro:", err);

            if (err.message.includes("Falha na comunicação com a API")) {
                setError("Falha na comunicação com o servidor. Verifique o console para detalhes.");
            } else {
                setError('Ocorreu um erro inesperado ao tentar cadastrar.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContainer>
            <AuthCard>
                <Title>Crie sua Conta</Title>
                <SubTitle>Cadastre-se e comece a jogar agora!</SubTitle>

                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <User size={20} />
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </InputGroup>

                    <InputGroup>
                        <Mail size={20} />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </InputGroup>

                    <InputGroup>
                        <Lock size={20} />
                        <input
                            type="password"
                            placeholder="Senha (min. 6 caracteres)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            minLength={6}
                            required
                        />
                    </InputGroup>

                    <InputGroup className="date-input">
                        <Calendar size={20} />
                        <input
                            type="text"
                            placeholder="dd/mm/aaaa"
                            value={dataNasc}
                            onChange={(e) => setDataNasc(e.target.value)}
                            required
                        />
                    </InputGroup>

                    {error && <p style={{ color: '#E74C3C', textAlign: 'center' }}>{error}</p>}

                    <PrimaryButton type="submit" disabled={loading} className={loading ? 'loading' : ''}>
                        {loading ? <Loader size={20} /> : <UserPlus size={20} />}
                        {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </PrimaryButton>
                </Form>

                <FooterText>
                    Já tem uma conta?
                    <AuthLink to="/login">Fazer Login</AuthLink>
                </FooterText>
            </AuthCard>
        </AuthContainer>
    );
}