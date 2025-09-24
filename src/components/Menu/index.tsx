import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './Menu.module.css';
import React, { useEffect, useState } from 'react';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light'; 

export const Menu = () => {
    const [theme, setTheme] = useState<AvailableThemes>(() => localStorage.getItem('theme') as AvailableThemes || 'dark');

    const themeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setTheme(oldTheme => {
            const nextTheme = oldTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <RouterLink className={styles.menuLink} href='/' aria-label='Ir para a home' title='Ir para a home'>
                <HouseIcon />
            </RouterLink>
            <RouterLink className={styles.menuLink} href='/history' aria-label='Ver Historico' title='Ver Historico'>
                <HistoryIcon />
            </RouterLink>
            <RouterLink className={styles.menuLink} href='/settings' aria-label='Configuracoes' title='Configuracoes'>
                <SettingsIcon />
            </RouterLink>
            <a className={styles.menuLink} onClick={handleThemeChange} href='#' aria-label='Mudar Tema' title='Mudar Tema'>
               { themeIcon[theme] }
            </a>
        </nav>
    );
}