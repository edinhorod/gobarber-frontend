import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '../../assets/logo.svg';

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <>
            <img src={logo} alt="BoBarber" />
            <Form onSubmit={handleSubmit}>
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
