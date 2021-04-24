import React, { ButtonHTMLAttributes } from 'react';
import { PropsWithChildren } from 'react';
import styles from './Button.module.scss';

const Button = (
    props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
) => {
    const { children, ...restProps } = props;
    return (
        <button className={styles.buttonStyle} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
