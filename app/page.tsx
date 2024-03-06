import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Welcome to Sudoku!</h1>
        <p>A project to show a 9x9 sudoku puzzle game and also a solver for when you get stuck!<br />
          Just select from the options below and start playing and solving!</p>
      </div>
      <div className={styles.body}>
        <div className={styles.section}>
          <Link className={styles.link} href="/sudoku">Sudoku</Link>
          <p>Play a 9x9 game of Sudoku!<br />
            Just fill a 9x9 grid with numbers so that each row, column and 3x3 section contain all of the digits between 1 and 9<br />
            <span className={styles.warning}>Still in progress...</span></p>
        </div>
        <div className={styles.section}>
          <Link className={styles.link} href="/solver">Solver</Link>
          <p>Stuck on your sudoku?<br />
            Solve a 9x9 Sudoku by inputting the numbers from your puzzle, the solver will fill out the rest at the push of a button!</p>
        </div>
      </div>
      <p>Craig Charlton</p>
    </main>
  );
}
