import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Profile } from 'types/Profile';
import makeRequest from 'utils/requests';
import './styles.scss';

type Props = {
    userName: string;
}

const ProfileDetails = ({userName}: Props) => {

    const [profile, setProfile] = useState<Profile>();
    

    useEffect(() => {
        makeRequest({githubUser: userName})
        .then(response => setProfile(response.data));
    },[]);

    return (
        <section className="profile-details-container">
            <section className="profile-details-esquerda">
                <img src={profile?.avatar_url} alt={profile?.name} title={profile?.name}/>
                <a href={profile?.html_url} target="_blank" rel="noreferrer">
                    <button>Ver perfil</button>
                </a>
            </section>
            <section className="profile-details-direita">
                <div className="linha-superior">
                    <span className="pilula">Repositórios públicos: {profile?.public_repos}</span>
                    <span className="pilula">Seguidores: {profile?.followers}</span>
                    <span className="pilula">Seguindo: {profile?.following}</span>
                </div>
                <div className="linha-inferior">
                    <h3>Informações</h3>
                    <div className="linha">
                        <strong>Empresa: </strong> 
                        {profile?.company}
                    </div>
                    <div className="linha">
                        <strong>Website/Blog: </strong> 
                        <a href={profile?.blog} target="_blank" rel="noreferrer">{profile?.blog}</a>
                    </div>
                    <div className="linha">
                        <strong>Localidade: </strong> 
                        {profile?.location}
                    </div>
                    <div className="linha">
                        <strong>Membro desde: </strong> 
                        {dayjs(profile?.created_at)
                        .format('DD/MM/YYYY')}
                    </div>
                </div>
            </section>
        </section>
    );
}

export default ProfileDetails;