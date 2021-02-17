import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <main>
        <h1>HOME</h1>
        <Link to="/search">
            <p>Search</p>
        </Link>
    </main>
);

export default Home;