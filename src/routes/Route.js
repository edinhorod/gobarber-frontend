import React from 'react';
import Proptypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import store from '../store';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const signed = store.getState().auth.signed;
    // const signed = true;
    // console.log(signed, isPrivate);

    if (!signed && isPrivate) {
        console.log('aqui');
        return <Redirect to="/" />;
    }

    // if (signed && !isPrivate) {
    if (signed) {
        console.log('dashboard');
        return <Redirect to="/dashboard" />;
    }
    console.log(signed);

    const Layout = signed ? DefaultLayout : AuthLayout;

    return (
        <Route
            {...rest}
            render={(props) => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
}

RouteWrapper.propTypes = {
    isPrivate: Proptypes.bool,
    component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
