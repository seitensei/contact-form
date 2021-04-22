import Express from 'express';
import { isContactForm } from './interfaces/contactForm';

const PORT = 8080;

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
            console.log(req.body);
            const reqObj = req.body;
            if (isContactForm(reqObj)) {
            } else {
                res.statusCode = 500;
                res.json({
                    message: 'An error was encounter processing the message.',
                });
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
