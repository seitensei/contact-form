export interface IContactForm {
    firstName?: string;
    lastName?: string;
    email: string;
    message: string;
}

export function isContactForm(obj: unknown): obj is IContactForm {
    return (
        (obj as IContactForm).email !== undefined ||
        (obj as IContactForm).message !== undefined
    );
}
