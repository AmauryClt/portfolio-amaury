import styles from "./home.module.scss";
import { Experience } from "../components/Experience.jsx"
import { Projects } from "../components/Projects.jsx"

export default function Home() {
  return (
    <main className={styles.mainHomeScss}>
      <div className={styles.divHome}>
      <p className={styles.paragrapheHomeScss}>
        À la fin de l'année 2022, j'ai pris la décision de me 
        réorienter vers un domaine d'activité qui me passionne 
        particulièrement : Internet.
        <br></br><br></br>
        Ayant acquis une solide expérience 
        dans l'utilisation de l'ordinateur et d'Internet dès mon 
        jeune âge, j'ai découvert certains aspects de la création 
        de sites web au cours de mes années en tant que commercial.
        <br></br><br></br>
        J'ai décidé de franchir le pas et de devenir un professionnel 
        dans ce secteur d'activité.
      </p>
      <Experience />
      <Projects />
      </div>
    </main>
  );
}
