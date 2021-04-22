import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import styles from './App.module.scss';
import ContactForm from './components/ContactForm/ContactForm';

export const App = () => {
    return (
        <main className={styles.mainContainer}>
            <ContactForm />
        </main>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
