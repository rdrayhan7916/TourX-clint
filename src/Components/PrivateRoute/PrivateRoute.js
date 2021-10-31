import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth()
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;