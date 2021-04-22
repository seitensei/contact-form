import React, { ChangeEvent, useState } from 'react';
import { IActionResult, postContactForm } from '../../services/contactForm';
import Input from '../Input/Input';
import Notification from '../Notification/Notification';
import TextArea from '../TextArea/TextArea';
import styles from './ContactForm.module.scss';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState('');
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        postContactForm({
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message
        }).then((res: IActionResult) => {
            if (res.successful) {
                setFirstName('');
                setLastName('');
                setEmail('');
                setMessage('');
            } else {
                setNotification(res.message ?? 'A problem has occurred while sending the message.');
                setIsNotificationOpen(true);
            }
        }).finally(() => {
            setLoading(false);
        });
    };

    const handleClearNotification = () => {
        setIsNotificationOpen(false);
        setNotification('');
    }

    return (
        <>
            <h1>Contact Us Form</h1>
            <Notification value={notification} isOpen={isNotificationOpen} setIsOpen={handleClearNotification} />
            <form onSubmit={(e: React.SyntheticEvent) => onSubmit(e)}>
                <Input
                    label="First Name"
                    value={firstName}
                    name="firstName"
                    disabled={loading}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFirstName(e.target.value)
                    }
                />
                <Input
                    label="Last Name"
                    value={lastName}
                    name="lastName"
                    disabled={loading}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setLastName(e.target.value)
                    }
                />
                <Input
                    label="Email"
                    value={email}
                    type="email"
                    name="email"
                    disabled={loading}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                    required
                />
                <TextArea
                    label="Message"
                    value={message}
                    name="message"
                    disabled={loading}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setMessage(e.target.value)
                    }
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className={styles.submitButton}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default ContactForm;
