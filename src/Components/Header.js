import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/">
                {props.title}
            </Link>
            <ul className="nav-links">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

Header.defaultProps = {
    title: "Your Title Here"
};

Header.propTypes = {
    title: PropTypes.string
};
