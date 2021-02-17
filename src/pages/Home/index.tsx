import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <main className="home-container">
        <h1>
            Desafio do Capítulo 3, <br />
            Bootcamp DevSuperior
        </h1>
        <p>
            Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
        </p>

        <p>
            Favor observar as instruções passadas no capítulo sobre a <br />
        elaboração deste projeto.
        </p>

        <p>
            Este design foi adaptado a partir de Ant Design System for Figma, de <br />
            Mateusz Wierzbicki: 
            <a href="mailto:antforfigma@gmail.com"> antforfigma@gmail.com</a>
        </p>
        <Link to="/search">
            <button>Começar</button>
        </Link>
    </main>
);

export default Home;