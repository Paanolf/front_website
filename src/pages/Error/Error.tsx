import './error.css';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <div className="text-center">
                <h1 className='text-3xl font-bold'>Hop là !</h1>
                <p>Une erreur est survenue</p>
                <p className="prose">
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}