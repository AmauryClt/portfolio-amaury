import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.headerBackGroundcolor}>
      <div className={styles.headerPosition}>
      <h1 className={styles.h1Header}>Amaury Clot</h1>
      <h2 className={styles.h2Header}>Développeur Web</h2>
      <p className={styles.paragrapheHeader}>
      Vous trouverez sur ce site les liens vers mes créations ainsi que les technologies que j&apos;ai utilisées.
      </p>
      <br></br><br></br>
      <div className={styles.linksContainer}>
          <p>06 42 93 43 91</p>
          <br></br>
          <a href="mailto:amauryclt@gmail.com">amauryclt@gmail.com</a>
          <br></br><br></br>
          <a href="https://www.linkedin.com/in/amaury-clot-483030251/" target="_blank" rel="noopener noreferrer">Linkedin</a>
          <br></br><br></br>
          <a href="https://github.com/AmauryClt" target="_blank" rel="noopener noreferrer">Repositories GitHub</a>
          <br></br><br></br>
          <a href="https://drive.google.com/file/d/1fbF1G56ip2JuqyLNibqwNiSe6piCTBAh/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV (PDF)</a>
        </div>
      </div>
    </header>
  );
}
