export interface IActionResult {
    successful: boolean;
    message?: string;
}

export interface IContactForm {
    firstName?: string;
    lastName?: string;
    email: string;
    message: string;
}

export interface IAPIClient {
    postEndpoint: (data: IContactForm) => Promise<IActionResult>;
}

export class APIClient implements IAPIClient {
    private _apiUrl: string;

    constructor() {
        // set defaults for host/port, so we can run locally without .env
        const apiHost = process.env.API_HOST ?? 'localhost';
        const apiPort = process.env.API_PORT ?? '35687';
        this._apiUrl = `http://${apiHost}:${apiPort}`;
    }

    public postEndpoint(data: IContactForm) {
        const postPath = `${this._apiUrl}/contactform`;
        return fetch(postPath, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            return res.json().then((resJson) => {
                return resJson as IActionResult;
            });
        });
    }
}