import { experienceData } from "./data";
import styles from "./experience.module.scss"

export function Experience () {
    return (
        <div className={styles.divExperience}>
          <h1 className={styles.titreExperience}>Mes expériences :</h1>
      {experienceData.map((experience, index) => (
        <div className={styles.hoverButtonExperience} key={index}>
          <h3 className={styles.nameExperience}>{experience.name}</h3>
          <ul className={styles.ulLienExperience}>
            {experience.lien.map((lie, lieIndex) => (
              <li className={styles.liLienExperience} key={lieIndex}>
              <a href={lie} target="_blank" rel="noopener noreferrer">
                {lie}
              </a>
            </li>
            ))}
          </ul>          
          <p className={styles.dateExperience}>Date : {experience.date}</p>
          <p className={styles.descriptionExperience}>Description : {experience.description}</p>
          <p className={styles.technologiesExperience}>Technologies :</p>
          <ul className={styles.ulTechExperience}>
            {experience.technologie.map((tech, techIndex) => (
              <li className={styles.liTechExperience} key={techIndex}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    );
}