import React from 'react';
import './styles.scss';

const Search = () => (
    <header className="header-container">
        <h1>Encontre um perfil no Github</h1>
        <input 
            type="text" name="github_user_name"
            placeholder="Usuário Github"
        />
        <button>Encontrar</button>
    </header>
);

export default Search;