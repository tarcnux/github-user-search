import React from 'react';
import ProfileDetails from './Components/ProfileDetails';
import './styles.scss';

const Search = () => {

    return (
        <>
            <header className="header-container">
                <h1>Encontre um perfil no Github</h1>
                <input
                    type="text" name="github_user_name"
                    placeholder="Usuário Github"
                />
                <button>Encontrar</button>
            </header>
            <ProfileDetails userName='tarcnux'/>
        </>
    )
};

export default Search;