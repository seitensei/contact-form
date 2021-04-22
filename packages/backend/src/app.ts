import Express from 'express';
import path from 'path';
import { IActionResult } from './interfaces/actionResult';
import { isContactForm } from './interfaces/contactForm';
import { AppendToFile } from './utils/fileUtil';

const PORT = 8080;
const appRoot = path.resolve(__dirname, '..');
const fileName = 'contactFormResponses.txt';
const filePath = path.join(appRoot, fileName);

class App {
    public app: Express.Application;

    constructor() {
        this.app = Express();
        this.config();
        this.routes();
    }

    private config() {
        this.app.set('port', PORT);
        this.app.use(Express.json());
    }

    private routes() {
        // For the limited scope of this app, routes are being managed here
        this.app.post('/contactform', (req, res) => {
            let result: IActionResult = {
                successful: false,
            };

            const reqObj = req.body;
            if (isContactForm(reqObj)) {
                AppendToFile(filePath, reqObj)
                    .then(() => {
                        res.statusCode = 200;
                        result.successful = true;
                        result.message =
                            'The message was successfully recorded.';
                    })
                    .catch((err) => {
                        res.statusCode = 500;
                        result.message =
                            'An error was encountered recording the message. Please wait a while and try again.';
                    })
                    .finally(() => {
                        res.send(result);
                    });
            } else {
                res.statusCode = 400;
                result.message =
                    'An error was encountered processing the message.';
                res.send(result);
            }
        });
    }

    public start() {
        this.app
            .listen(this.app.get('port'), () => {
                console.log(`Starting server on port ${PORT}`);
            })
            .on('error', (err) => {
                console.error(err);
                process.exit(1);
            });
    }
}

const app = new App();
app.start();
