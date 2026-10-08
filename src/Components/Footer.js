import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>
                Copyright &copy; {currentYear} MyTodosList.com. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
