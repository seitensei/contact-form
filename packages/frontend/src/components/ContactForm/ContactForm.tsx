import React, { ChangeEvent, useState } from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
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
                    name="firstName"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFirstName(e.target.value)
                    }
                />
                <Input
                    label="Last Name"
                    value={lastName}
                    name="lastName"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setLastName(e.target.value)
                    }
                />
                <Input
                    label="Email"
                    value={email}
                    type="email"
                    name="email"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                />
                <TextArea
                    label="Message"
                    value={message}
                    name="message"
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(e.target.value)
                    }
                />
                <button
                    type="submit"
                    className={styles.submitButton}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default ContactForm;
