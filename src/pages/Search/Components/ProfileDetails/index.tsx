import React from 'react';
import './styles.scss';

const ProfileDetails = () => {

    return (
        <section className="profile-details-container">
            <section className="profile-details-esquerda">
                <img src="https://avatars.githubusercontent.com/u/2284408?v=4" alt="name"/>
                <button>Ver perfil</button>
            </section>
            <section className="profile-details-direita">
                <div className="linha-superior">
                    <span className="pilula">Repositórios públicos: API</span>
                    <span className="pilula">Seguidores: API</span>
                    <span className="pilula">Seguindo: API</span>
                </div>
                <div className="linha-inferior">
                    <h3>Informações</h3>
                    <div className="linha">
                        <strong>Empresa: </strong> 
                        Busca na API
                    </div>
                    <div className="linha">
                        <strong>Website/Blog: </strong> 
                        <a href="link" target="_blank">Busca na API</a>
                    </div>
                    <div className="linha">
                        <strong>Localidade: </strong> 
                        Busca na API
                    </div>
                    <div className="linha">
                        <strong>Membro desde: </strong> 
                        Busca na API
                    </div>
                </div>
            </section>
        </section>
    );
}

export default ProfileDetails;