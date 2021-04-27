import { IActionResult, IAPIClient, IContactForm } from "./apiClient";
import { ContactFormService } from "./contactForm";

class MockAPIClient implements IAPIClient {
    private _pass: boolean;
    private _rejection: boolean;

    constructor(pass: boolean, rejection: boolean = false) {
        this._pass = pass;
        this._rejection = rejection;
    }

    public postEndpoint(contactForm: IContactForm) {
        return new Promise<IActionResult>((resolve, reject) => {
            if (this._rejection)
                reject('Error');

            if (this._pass) {
                resolve({
                    successful: true,
                    message: 'Success'
                });
            } else {
                resolve({
                    successful: false,
                    message: 'Failure'
                })
            }
        });
    }
}

describe('Post Contact Form Service', () => {
    test('should pass through success', () => {
        const mockSuccessClient = new MockAPIClient(true);
        const service = new ContactFormService(mockSuccessClient);

        service.postContactForm({
            email: 'email@example.tld',
            message: 'Test Data'
        }).then((result) => {
            expect(result.successful).toBe(true);
            expect(result.message).toEqual('Success');
        });
    });

    test('should pass through failure', () => {
        const mockFailureClient = new MockAPIClient(false);
        const service = new ContactFormService(mockFailureClient);

        service.postContactForm({
            email: 'email@example.tld',
            message: 'Test Data'
        }).then((result) => {
            expect(result.successful).toBe(false);
            expect(result.message).toEqual('Failure');
        });
    });

    test('should should resolve error as an action result', () => {
        const mockErrorClient = new MockAPIClient(true, true);
        const service = new ContactFormService(mockErrorClient);

        service.postContactForm({
            email: 'email@example.tld',
            message: 'Test Data'
        }).then((result) => {
            expect(result.successful).toBe(false);
            expect(result.message).toEqual('The message was unable to be processed.');
        });
    });
});