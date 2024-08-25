// functions/server.js
const { handler } = require('@netlify/functions');

const handler = async (event, context) => {
    // Handle the root route
    if (event.httpMethod === 'GET' && event.path === '/') {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Welcome to the API!" }),
        };
    }

    // Add your other route handlers here
    // ...

    return {
        statusCode: 404,
        body: JSON.stringify({ message: "Not Found" }),
    };
};

exports.handler = handler;
