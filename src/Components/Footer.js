import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
    <footer className="App bg-dark text-light py-3">
            <p className="text-center">
                Copyright &copy; {currentYear} MyTodosList.com
            </p>
        </footer>
    );
};

export default Footer;
