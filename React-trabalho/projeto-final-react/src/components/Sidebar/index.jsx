import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Grid, Star, BarChart3, User, LogIn, Menu } from 'lucide-react';
import {
    Container,
    MenuItem,
    IconWrapper,
    Label,
    Logo,
    Footer,
    ProfileButton,
    ToggleButton,
    MenuContainer,
} from './style.jsx';

export function SideBarComponent() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { name: 'Home', icon: Home, link: '/home' },
        { name: 'Categorias', icon: Grid, link: '/categoria' },
        { name: 'Favorito', icon: Star, link: '/favorito' },
        { name: 'Ranking', icon: BarChart3, link: '/ranking' },
    ];

    const userItems = [
        { name: 'Perfil', icon: User, link: '/perfil' },
        { name: 'Login', icon: LogIn, link: '/login' },
    ];

    const renderMenuItem = (item, isProfile = false) => {
        const isActive = location.pathname === item.link;
        const Component = isProfile ? ProfileButton : MenuItem;

        return (
            <Component
                key={item.name}
                onClick={() => {
                    navigate(item.link);
                    setIsOpen(false);
                }}
                aria-label={`Ir para ${item.name}`}
                $isActive={isActive}
            >
                <IconWrapper>
                    <item.icon size={22} />
                </IconWrapper>
                <Label>{item.name}</Label>
            </Component>
        );
    };

    return (
        <>
            <ToggleButton onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
                <Menu size={20} />
            </ToggleButton>

            <Container $isOpen={isOpen}>
                <Logo>QuizMaster</Logo>

                <MenuContainer>
                    {menuItems.map(item => renderMenuItem(item))}
                </MenuContainer>

                <Footer>
                    {userItems.map(item => renderMenuItem(item, true))}
                </Footer>
            </Container>
        </>
    );
}