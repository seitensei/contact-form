import CompletedView from "./components/CompletedView/CompletedView";
import ContactForm from "./components/ContactForm/ContactForm";

export const routes = [
    {
        name: 'index',
        key: 'index',
        component: ContactForm,
        path: '/',
        exact: true,
    },
    {
        name: 'completed',
        key: 'completed',
        component: CompletedView,
        path: '/completed',
        exact: false,
    }
];