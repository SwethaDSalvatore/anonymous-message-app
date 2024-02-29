import {Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const { status, statusText } = useRouteError();
    return (
        <div className="m-10 text-white  bg-blue-500 max-w-xl mx-auto p-10 rounded space-y-2">
            <h4 className="font-semibold  text-2xl">#{status} Oops...{statusText}!</h4>
            <p>Something went wrong..? </p>
            <Link className="underline" to='/'>Yes, take me back to home Page</Link>

        </div>
    );
};

export default ErrorPage;