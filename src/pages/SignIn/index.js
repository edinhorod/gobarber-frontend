import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é Obrigatório'),
    password: Yup.string().required('Senha é obrigatória'),
});

export default function SignIn() {
    const dispatch = useDispatch();
    function handleSubmit({ email, password }) {
        dispatch(signInRequest(email, password));
    }
    return (
        <>
            <img src={logo} alt="BoBarber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                />
                <Input
                    name="password"
                    type="password"
                    placeholder="Digite sua senha"
                />
                <button type="submit">Acessar</button>
                <Link to="/register">Criar sua conta gratuita</Link>
            </Form>
        </>
    );
}
