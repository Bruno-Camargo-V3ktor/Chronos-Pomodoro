import type React from "react"
import styles from "./Container.module.css";

type ContainerProps = {
    children: React.ReactNode,
}

export const Contianer = ({children}: ContainerProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}