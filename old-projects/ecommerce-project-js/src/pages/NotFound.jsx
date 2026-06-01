import { Header } from "../components/Header";
import './NotFound.css';

export function NotFound({ cart }) {
    return (
        <>
            <Header cart={cart} />

            <title>Error Not Found</title>
            <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

            <div className="not-found-message">
                Page not found
            </div>
        </>
    );
}