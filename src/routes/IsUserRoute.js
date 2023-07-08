/* eslint-disable prettier/prettier */
import { Navigate, useLocation } from "react-router";
const IsUserRoute = ({ children }) => {
    const location = useLocation();
    // TODO Login and check the role
    const user = true;

    if (user) {
        return children;
    }
    return (
        <Navigate
            to="/pages/login/login3"
            state={{ from: location }}
            replace
        />
    );
};

export default IsUserRoute;
