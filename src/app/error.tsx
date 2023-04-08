'use client';

import { useEffect } from 'react';

interface ErrorProps {
    error: Error;
    reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <>
            <div className="text-center mt-10">
                <h1>Something went wrong</h1>
                <button className="hover:text-amber-600" onClick={reset}>
                    Try Again
                </button>
            </div>
        </>
    );
};

export default Error;
