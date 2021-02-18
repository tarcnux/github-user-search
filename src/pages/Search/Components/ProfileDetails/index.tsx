import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { Profile } from 'types/Profile';
import makeRequest from 'utils/requests';
import ImageLoader from '../ContentLoaders/ImageLoader';
import InfoLoader from '../ContentLoaders/InfoLoader';
import './styles.scss';

type Props = {
    userName: string;
}

const ProfileDetails = ({ userName }: Props) => {

    const [profile, setProfile] = useState<Profile>();
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        makeRequest({ githubUser: userName })
            .then(response => setProfile(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [userName]);

    return (
        <section className="profile-details-container">
            <section className="profile-details-esquerda">
                {isLoading ? <ImageLoader /> : (
                    <>
                        <img src={profile?.avatar_url} alt={profile?.name} title={profile?.name} />
                        <a href={profile?.html_url} target="_blank" rel="noreferrer">
                            <button>Ver perfil</button>
                        </a>
                    </>
                )}
            </section>
            <section className="profile-details-direita">
                {isLoading ? <InfoLoader /> : (
                    <>
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
                    </>
                )}
            </section>
        </section>
    );
}

export default ProfileDetails;