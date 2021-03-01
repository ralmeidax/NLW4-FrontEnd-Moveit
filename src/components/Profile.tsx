import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import stylesProfile from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return ( 
        <div className={stylesProfile.profileContainer}>
            <img src="https://github.com/ralmeidax.png" alt="Ricardo de Almeida"/>
            <div>
                <strong>Ricardo de Almeida</strong>
                <p>
                    <img src="icons/level.svg" alt="Meu Nível!"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}