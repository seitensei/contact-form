import { isValidEmail } from './emailValidation';

const validTests = [
    'support@google.com',
    'username@university.ac.jp',
    'user@england.co.uk',
    'user.name@mail.domain.org',
    'user.name+tag@domain.net',
    '"user"@domain.net',
];

const invalidTests = [
    'www.google.com',
    'user@localdomain', // valid email that's not valid for cross network use
    '"spaced quote"@domain.net',
    'user@spaced domain.net',
    'fakeemail',
    'fake email',
    '日本語@unicode.example',
];

describe('email validation', () => {
    test.each(validTests)('should validate for valid email %p', (testData) => {
        expect(isValidEmail(testData)).toBe(true);
    });
    test.each(invalidTests)(
        'should not validate for invalid email %p',
        (testData) => {
            expect(isValidEmail(testData)).toBe(false);
        }
    );
});
