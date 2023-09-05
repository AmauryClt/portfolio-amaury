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
      </div>
    </header>
  );
}
