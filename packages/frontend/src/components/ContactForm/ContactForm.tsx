import React, { useState } from 'react';
import Input from '../Input/Input';

const ContactForm = () => {
    const [email, setEmail] = useState('');
    return (
        <form>
            <Input label="Email" value={email} onChange={setEmail} />
        </form>
    );
};

export default ContactForm;
