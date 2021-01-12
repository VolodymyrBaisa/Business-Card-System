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
                <Route export path="/cardupload" component={CardUpload} />
                <Route export path="/newcard" component={NewCard} />
                <Route
                    export
                    path="/accountandsecurity"
                    component={AccountAndSecurity}
                />
                <Route export path="/security" component={Settings} />
            </Switch>
        </Router>
    );
}

export default App;
