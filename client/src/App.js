import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/styles.scss";

import Container from "./pages/Container";
import Dashboard from "./pages/fragments/Dashboard";
import CardUpload from "./pages/fragments/CardUpload";
import AccountAndSecurity from "./pages/fragments/AccountAndSecurity";
import Settings from "./pages/fragments/Settings";
import NoMatch from "./pages/NoMatch";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
    const [user, setUser] = useState({});

    return (
        <Router>
            <Container
                key={window.location.pathname}
                onUserCallback={(user) => setUser(user)}
                onSearchCallback={(search) => {
                    console.log(search);
                }}
                {...user}
            >
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={(props) => (
                            <Dashboard {...props} user={user} />
                        )}
                    />
                    <ProtectedRoute exact path="/accountandsecurity">
                        <AccountAndSecurity
                            onUserCallback={(u) => {
                                setUser({
                                    ...user,
                                    firstName: u.firstName,
                                    lastName: u.lastName,
                                    email: u.email,
                                });
                            }}
                            {...user}
                        />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/cardupload">
                        <CardUpload {...user} />
                    </ProtectedRoute>
                    <ProtectedRoute exact path="/security">
                        <Settings
                            onUserCallback={(user) => setUser(user)}
                            {...user}
                        />
                    </ProtectedRoute>
                    <Route exact component={NoMatch} />
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
