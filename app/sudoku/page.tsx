import styles from "./page.module.scss";
import React from "react";
import Link from "next/link";

const Sudoku = () => {


  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Sudoku</h1>
        <p>Nothing here yet!</p>
        <Link className={styles.link} href="/">Go Back...</Link>
      </div>
    </main>
  )
}

export default Sudoku
