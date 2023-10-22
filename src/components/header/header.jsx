import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Find your pokemon</h1>
      <p className={styles.text}>
        Just click on the button and find out which pokemon is right for you
      </p>
    </header>
  );
}
