import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Sudoku Solver</h1>
      </div>
      <div className={styles.body}>
        <p></p>
      </div>
    </main>
  );
}
