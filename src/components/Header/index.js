import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications/index';

import logo from '../../assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="goBarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />
                    
                    <Profile>
                        <div>
                            <strong>Jose da Silva</strong>
                            <Link to="/profile">Meu Perfil</Link>
                        </div>
                        <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="name" />
                    </Profile>
                </aside>
            </Content>
        </Container>
    )
}