import type React from 'react';
import styles from './GenericHtml.module.css';

type GenericHtmlProps = {
    children: React.ReactNode;
}

export const GenericHtml = ({children}: GenericHtmlProps) => {
    return( 
    <div className={styles.genericHtml}>
        {children}
    </div >
    )
}