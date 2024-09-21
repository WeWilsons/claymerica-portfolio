// src/components/layout.js
import React from "react"
import styles from "./layout.module.css" // Import CSS module

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Claymerica Industries Portfolio</h1>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>© 2024 Claymerica Industries</p>
      </footer>
    </div>
  )
}

export default Layout
