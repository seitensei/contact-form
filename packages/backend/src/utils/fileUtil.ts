import { appendFile } from 'fs/promises';
import { PathLike } from 'node:fs';

import { IContactForm } from '../interfaces/contactForm';

export const AppendToFile = (filePath: PathLike, data: IContactForm) => {
    const curDate = new Date();
    const dateStr = `${curDate.getMonth()}-${curDate.getDate()}-${curDate.getFullYear()}`;
    const formatted = `${dateStr}: ${
        data.firstName ? data.firstName + ' ' : ''
    }${data.lastName ? data.lastName + ' ' : ''}<${data.email}>: ${
        data.message
    }`;

    return appendFile(filePath, formatted + '\n', 'utf-8');
};
