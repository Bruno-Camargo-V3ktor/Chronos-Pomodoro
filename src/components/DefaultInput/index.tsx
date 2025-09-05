import type React from 'react';import styles from './DefaultInput.module.css';

type DefaultInputProps = {
    id: string,
    labelText?: string
} & React.ComponentProps<'input'>;

export const DefaultInput = ({id, labelText, type, ...rest}: DefaultInputProps) => {

    return (
        <>
            { labelText && <label htmlFor={id}>{labelText}</label> }
            <input className={styles.input} id={id} type={type} {...rest}/>
        </>
    );
}