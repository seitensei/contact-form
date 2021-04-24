import React from 'react';
import { useHistory } from 'react-router';
import Button from '../Button/Button';

const CompletedView = () => {
    const history = useHistory();

    const handleReturnClick = () => {
        history.push('/');
    };

    return (
        <div>
            <p>
                Thank you for contacting us. A represenative will
                review your message and follow up if required.
            </p>
            <Button onClick={() => handleReturnClick()}>
                Return
            </Button>
        </div>
    );
}

export default CompletedView;