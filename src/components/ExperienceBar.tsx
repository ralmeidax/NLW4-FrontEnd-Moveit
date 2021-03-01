import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel);

    return (
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div>
                <div style = {{width: `${percentToNextLevel}%`}} />

                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                    <strong>
                        {currentExperience}xp
                    </strong>
                    <img src="icons/runner.svg" alt="Meu Nível!"/>
                    
                </span>
                
            </div>
            <span>{experienceToNextLevel}xp</span>
            <img src="icons/medal.svg" alt="Fim da Jornada"/>
        </header>
    );
}