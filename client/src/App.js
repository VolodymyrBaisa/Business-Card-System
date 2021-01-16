import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/styles.scss";

import Container from "./pages/Container";
import Dashboard from "./pages/fragments/Dashboard";
import CardUpload from "./pages/fragments/CardUpload";
import AccountAndSecurity from "./pages/fragments/AccountAndSecurity";
import Settings from "./pages/fragments/Settings";
import NoMatch from "./pages/NoMatch";

function App() {
    return (
        <Router>
            <Switch>
                <Container>
                    <Route export exact path="/" component={Dashboard} />
                    <Route
                        export
                        exact
                        path="/cardupload"
                        component={CardUpload}
                    />
                    <Route
                        export
                        exact
                        path="/accountandsecurity"
                        component={AccountAndSecurity}
                    />
                    <Route export exact path="/security" component={Settings} />
                    <Route export path="/nomatch" component={NoMatch} />
                </Container>
            </Switch>
        </Router>
    );
}

export default App;
