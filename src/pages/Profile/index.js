import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';

export default function Profile() {
    const profile = useSelector(state => state.user.profile);

    function handleSubmit(date) {

    }

    return (
        <Container>
            <Form initialData={profile} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome Completo"/>
                <Input name="email" type="email" placeholder="Email Completo"/>

                <hr />

                <Input type="password" name="oldPassword" placeholder="sua senha atual"/>
                <Input type="password" name="password" placeholder="nova senha"/>
                <Input type="password" name="confirmPassword" placeholder="Confirmar senha"/>

                <button type="submit">Atualizar perfil</button>
            </Form>

            <button type="button">
                Sair(loggout)
            </button>
        </Container>
    )
    
}