import React from "react";
import { projectsData } from "./data";
import styles from "./projects.module.scss"

export function Projects() {
  return (
    <div className={styles.divProject}>
      <h2 className={styles.titreProject}>Mes projets :</h2>
      {projectsData.map((project, index) => (
        <div className={styles.hoverButtonProjects} key={index}>
          <h3 className={styles.nameProject}>{project.name}</h3>
          <ul className={styles.ulLienProject}>
            {project.lien[0] && (
              <li className={styles.liLienProject}>
                <a href={project.lien[0]} target="_blank" rel="noopener noreferrer">
                  Site web
                </a>
              </li>
            )}
            {project.lien.slice(1).map((githubLink, githubIndex) => (
              <li className={styles.liLienProject} key={githubIndex}>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                  Repository Github
                </a>
              </li>
            ))}
          </ul>
          <p className={styles.descriptionProject}>Description : {project.description}</p>
          <p className={styles.nameProject}>Date : {project.date}</p>
          <p className={styles.TechnologiesProject}>Technologies :</p>
          <ul className={styles.ulTechProject}>
            {project.technologie.map((tech, techIndex) => (
              <li className={styles.liTechProject} key={techIndex}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

