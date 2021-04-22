import React from 'react';
import styles from './Notification.module.scss';

interface INotificationProps {
    value: string;
    isOpen: boolean;
    setIsOpen: (flag: boolean) => void;
}
const Notification = (props: INotificationProps) => {
    const { value, isOpen, setIsOpen } = props;

    let notificationElement;
    if (isOpen) {
        notificationElement = (
            <div className={styles.notificationContainer}>
                <div className={styles.notificationText}>{value}</div>
                <div className={styles.notificationButton}>
                    <button onClick={() => setIsOpen(false)}>Dismiss</button>
                </div>
            </div>
        );
    } else {
        notificationElement = null;
    }

    return (
        <>
        { notificationElement }
        </>
    );
};

export default Notification;
