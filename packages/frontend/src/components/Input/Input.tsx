import clsx from 'clsx';
import React from 'react';
import styles from './Input.module.scss';

interface IInputProps {
    value: string | number | readonly string[];
    onChange: (val: string) => void;
    label: string;
    textArea?: boolean;
}

const Input = (props: IInputProps) => {
    const { value, onChange, label, textArea } = props;

    let primaryControl;

    if (textArea) {
        primaryControl = (
            <textarea
                className={clsx([
                    styles.inputControl,
                    styles.inputControlTextArea,
                ])}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        );
    } else {
        primaryControl = (
            <input
                className={styles.inputControl}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        );
    }

    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>{label}</label>
            {primaryControl}
        </div>
    );
};

export default Input;
