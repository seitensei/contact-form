import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import styles from './App.module.scss';

export const App = () => {
    return (
        <main className={styles.mainContainer}>
            <h1>Contact Us Form</h1>
            <form></form>
        </main>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
