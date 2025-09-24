import { Link } from "react-router";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/about-pomodoro">Entenda como funciona a técnica pomodoro</Link>

      <a href="">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💖
      </a>
    </footer>
  );
};
