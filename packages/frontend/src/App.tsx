import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import styles from './App.module.scss';
import ContactForm from './components/ContactForm/ContactForm';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CompletedView from './components/CompletedView/CompletedView';

export const App = () => {
    return (
        <Router>
            <main className={styles.mainContainer}>
                <h1>Contact Us Form</h1>
                <Switch>
                    <Route exact path="/" component={ContactForm} />
                    <Route path="/completed" component={CompletedView} />
                    <Route component={() => <Redirect to="/" />}/>
                </Switch>
            </main>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
