import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Menu.module.css';
import React, { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light'; 

export const Menu = () => {
    const [theme, setTheme] = useState<AvailableThemes>('dark');

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setTheme(oldTheme => {
            const nextTheme = oldTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a className={styles.menuLink} href='#' aria-label='Ir para a home' title='Ir para a home'>
                <HouseIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Ver Historico' title='Ver Historico'>
                <HistoryIcon />
            </a>
            <a className={styles.menuLink} href='#' aria-label='Configuracoes' title='Configuracoes'>
                <SettingsIcon />
            </a>
            <a className={styles.menuLink} onClick={handleThemeChange} href='#' aria-label='Mudar Tema' title='Mudar Tema'>
                <SunIcon />
            </a>
        </nav>
    );
}