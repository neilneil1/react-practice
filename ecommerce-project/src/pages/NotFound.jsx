import { Header } from "../components/Header";

export function NotFound() {
    return (
        <>
            <Header />

            <title>Error Not Found</title>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <p
                    style={{
                        fontSize: '50px'
                    }}
                >
                    Page Not Found
                </p>
            </div>
        </>
    );
}