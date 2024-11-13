import React from 'react';

const PageLoader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-opacity-75"></div>
            <h1 className="ml-4 text-lg">Loading user list...</h1>
        </div>
    );
};

export default PageLoader;
