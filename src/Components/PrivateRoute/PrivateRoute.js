import React from 'react';
import { Redirect, Route } from 'react-router';
import useFirebase from '../../Hook/useFirebase';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useFirebase()
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