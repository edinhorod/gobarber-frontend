import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

const schema = Yup.object().shape({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
        .email('E-mail inválido')
        .required('E-mail é Obrigatório'),
    password: Yup.string()
        .min(6, 'A senha deve ter pelo mneos 6 caracteres')
        .required('Senha é obrigatória'),
});

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="BoBarber" />
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" placeholder="Nome completo" />
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

                <button type="submit">Cadastar</button>

                <Link to="/">Já tem cadastro? Acesse sua conta</Link>
            </Form>
        </>
    );
}
