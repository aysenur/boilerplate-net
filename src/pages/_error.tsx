import { NextPageContext } from 'next';

const Error = ({ statusCode }) => {
    return (
        <p>
            {statusCode ? `Error ${statusCode} occured on server.` : 'Client Error Occured.'} Please try again later!
        </p>
    );
};

Error.getInitialProps = ( {res, err } : NextPageContext ) => {
    const statusCode = res?.statusCode || err?.statusCode || 404;
    return { statusCode };
}

export default Error;