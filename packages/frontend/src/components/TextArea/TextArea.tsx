import clsx from 'clsx';
import React, { HTMLProps } from 'react';
import styles from './TextArea.module.scss';

interface IInputProps extends HTMLProps<HTMLTextAreaElement> {
    label: string;
}

const TextArea = (props: IInputProps) => {
    const { label } = props;

    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            <textarea className={styles.inputControl} {...props} />
        </div>
    );
};

export default TextArea;
