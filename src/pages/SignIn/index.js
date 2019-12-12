import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('msg_caso_validação_falhe')
        .required('msg_caso_validação_falhe'),
    password: Yup.string()
        .required('msg_caso_validação_falhe'),
})

export default function SignIn() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password))
        // console.log(data);
    }
    
    return (
        <> 
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit} >
                <Input name="email" type="email" placeholder="Seu e-mail" />
                <Input name="password" type="password" placeholder="Sua senha" />

                <button type="submit">{ loading ? 'Carregando...' : 'Acessar'}</button>
                <Link to="/register">Criar Conta</Link>
            </Form>
        </>
    )
}
