import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav>
        <Link to="/">
            <p>Bootcamp DevSuperior</p>
        </Link>
    </nav>
);

export default Navbar;