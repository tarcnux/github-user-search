import React, { useState } from 'react';
import ProfileDetails from './Components/ProfileDetails';
import './styles.scss';

const Search = () => {

    const [inputGithubUserName, setInputGithubUserName] = useState('');
    const [userName, setUserName] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputGithubUserName(event.target.value);
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        setUserName(inputGithubUserName);
        setInputGithubUserName('');
    };

    return (
        <>
            <header className="header-container">
                <h1>Encontre um perfil no Github</h1>
                <form onSubmit={handleOnSubmit}>
                    <input
                        value={inputGithubUserName}
                        type="text"
                        name="githubUserName"
                        placeholder="Usuário Github"
                        onChange={handleOnChange}
                    />
                    <button>Encontrar</button>
                </form>
            </header>
            {userName && <ProfileDetails userName={userName} />}
            
        </>
    )
};

export default Search;