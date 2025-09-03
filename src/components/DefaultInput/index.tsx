import type React from 'react';
//import styles from './DefaultInput.module.css';

type DefaultInputProps = {
    //type : 'text' | 'number';
} & React.ComponentProps<'input'>;

export const DefaultInput = ({id, type}: DefaultInputProps) => {

    return (
        <>
            <label htmlFor={id}>task</label>
            <input id={id} type={type} />
        </>
    );
}