const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    const user_id = "RajeshkumarJashti_26042003";
    const email = "rajeshkumar_jashti@srmap.edu.in"; 
    const rollNumber = "AP21110011415";

    
    if (!user_id || !email || !rollNumber || !Array.isArray(data)) {
        return res.status(400).json({ 
            is_success: false, 
            user_id: null, 
            email: null, 
            roll_number: null, 
            numbers: [], 
            alphabets: [], 
            highest_alphabet: null 
        });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => typeof item === 'string' && isNaN(item));

    
    const highestAlphabet = alphabets.length > 0 ? [alphabets.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()))[0]] : null;

    res.json({
        is_success: true,
        user_id: user_id,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
