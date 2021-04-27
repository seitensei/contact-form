import { IActionResult, IAPIClient, IContactForm } from "./apiClient";

export class ContactFormService {
    private _apiClient: IAPIClient;

    constructor(apiClient: IAPIClient) {
        this._apiClient = apiClient;
    }

    public postContactForm(contactForm: IContactForm) {
        return this._apiClient.postEndpoint(contactForm).catch((err) => {
            console.error(err);
            return {
                successful: false,
                message: 'The message was unable to be processed.'
            } as IActionResult;
        });
    }
}