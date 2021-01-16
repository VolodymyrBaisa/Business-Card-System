import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/styles.scss";

import Dashboard from "./pages/Dashboard";
import CardUpload from "./pages/CardUpload";
import NewCard from "./pages/NewCard";
import AccountAndSecurity from "./pages/AccountAndSecurity";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";


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
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/nomatch" component={NoMatch} />
            </Switch>
        </Router>
    );
}

export default App;
