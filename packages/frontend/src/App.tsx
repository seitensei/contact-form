import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import styles from './App.module.scss';
import ContactForm from './components/ContactForm/ContactForm';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import { routes } from './routes';
import CompletedView from './components/CompletedView/CompletedView';

export const App = () => {
    return (
        <Router>
            <main className={styles.mainContainer}>
                <h1 className={styles.header}>Contact Us Form</h1>
                <Switch>
                    {routes.map(route => (
                        <Route key={route.key} exact={route.exact} path={route.path} component={route.component} />
                    ))}
                    <Route component={() => <Redirect to="/" />} />
                </Switch>
            </main>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
