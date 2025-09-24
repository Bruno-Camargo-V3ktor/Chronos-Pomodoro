import styles from "./Footer.module.css";
import { RouterLink } from "../RouterLink";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro">Entenda como funciona a técnica pomodoro</RouterLink>

      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com 💖
      </RouterLink>
    </footer>
  );
};
