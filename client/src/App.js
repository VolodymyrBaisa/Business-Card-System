import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/styles.scss";

import Dashboard from "./pages/Dashboard";
import CardUpload from "./pages/CardUpload";
import NewCard from "./pages/NewCard";
import AccountAndSecurity from "./pages/AccountAndSecurity";
import Settings from "./pages/Settings";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/cardupload" component={CardUpload} />
                <Route exact path="/newcard" component={NewCard} />
                <Route
                    exact
                    path="/accountandsecurity"
                    component={AccountAndSecurity}
                />
                <Route exact path="/security" component={Settings} />
            </Switch>
        </Router>
    );
}

export default App;
