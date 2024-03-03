import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Welcome to Sudoku!</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.section}>
          <Link className={styles.link} href="/sudoku">Sudoku</Link>
          <p>Play a 9x9 game of Sudoku!<br />
          Still in progress...</p>
        </div>
        <div className={styles.section}>
          <Link className={styles.link} href="/solver">Solver</Link>
          <p>Solve a 9x9 Sudoku by inputting the numbers from your puzzle.</p>
        </div>
      </div>
      <p>Craig Charlton</p>
    </main>
  );
}
