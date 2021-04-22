import React, { useState } from 'react';
import Input from '../Input/Input';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = () => {};

    return (
        <>
            <h1>Contact Us Form</h1>
            <form onSubmit={() => onSubmit()}>
                <Input
                    label="First Name"
                    value={firstName}
                    onChange={setFirstName}
                />
                <Input
                    label="Last Name"
                    value={lastName}
                    onChange={setLastName}
                />
                <Input label="Email" value={email} onChange={setEmail} />
                <Input
                    label="Message"
                    value={message}
                    onChange={setMessage}
                    textArea
                />
                <button
                    className={styles.submitButton}
                    onClick={() => onSubmit}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default ContactForm;
