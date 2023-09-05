import styles from "./home.module.scss";
import { Experience } from "../components/Experience.jsx"
import { Projects } from "../components/Projects.jsx"

export default function Home() {
  return (
    <main className={styles.mainHomeScss}>
      <div className={styles.divHome}>
      <p className={styles.paragrapheHomeScss}>
        À la fin de l&apos;année 2022, j&apos;ai pris la décision de me réorienter
        vers un domaine qui suscite ma passion depuis longtemps : l&apos;Internet.
        <br></br><br></br>
        Fort d&apos;une expérience solide dans l&apos;utilisation de l&apos;ordinateur et d&apos;Internet depuis mon plus jeune âge,
        j&apos;ai exploré certains aspects de la création de sites web au cours de mes années en tant que commercial.
        <br></br><br></br>
        J&apos;ai choisi de faire le grand saut et de me professionnaliser dans ce secteur d&apos;activité.
      </p>
      <Experience />
      <Projects />
      </div>
    </main>
  );
}
