import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Find your pokemon</h1>
    </header>
  );
}
