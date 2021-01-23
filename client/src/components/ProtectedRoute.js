import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ children }) => (
    <Route>{children.props._id ? children : <Redirect to="/" />}</Route>
);
