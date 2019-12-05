import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
    name: Yup.string()
        .required('msg_caso_validação_falhe'),
    email: Yup.string()
        .email('msg_caso_validação_falhe')
        .required('msg_caso_validação_falhe'),
    password: Yup.string()
        .min(6, 'msg_caso_validação_falhe')
        .required('msg_caso_validação_falhe'),
})

export default function SignUp() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <> 
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" /> 
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input name="password" type="password" placeholder="Sua senha" />

                <button type="submit">Criar Conta</button>
                <Link to="/">ja tenho conta</Link>
            </Form>
        </>
    )
}
