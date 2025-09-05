import type React from 'react';
import styles from './DefaultButton.module.css';

type DefaultButtonProps = {
    icon: React.ReactNode;
    color?: 'green' | 'red';
} & React.ComponentProps<'button'>;

export const DefaultButton = ({icon, color='green', ...rest}: DefaultButtonProps) => {

    return (
        <>
            <button className={`${styles.button} ${styles[color]}`} {...rest}>
                {icon}
            </button>
        </>
    );
}