const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercaseAlphabet = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercase = highestLowercaseAlphabet.length > 0 ? [highestLowercaseAlphabet.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

module.exports.handler = serverless(app);
