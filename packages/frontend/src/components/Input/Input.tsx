import React from 'react';

interface IInputProps {
    value: string | number | readonly string[];
    onChange: (val: string) => void;
    label: string;
}

const Input = (props: IInputProps) => {
    const { value, onChange, label } = props;

    return (
        <label>
            {label}
            <input
                value={value}
                onChange={(e) => onChange(e.target.value)}
            ></input>
        </label>
    );
};

export default Input;
