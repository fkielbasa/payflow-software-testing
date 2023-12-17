import React from "react";
import { Link } from "react-router-dom";
import '../styles/NotFoundStyles.css';

const NotFound = () => {
    return (
        <div className="jumbotron, notFound">
            <h1 className="display-4">404 - Not found!</h1>
            <p className="lead">Strona na której się znajdujesz nie istnieje!</p>
            <hr className="my-4"/>
            <p>Przejdź do strony głównej.</p>
            <Link className="btn btn-primary btn-lg notFoundBtn" to="/home" role="button">Home</Link>
        </div>
    );
};

export default NotFound;
