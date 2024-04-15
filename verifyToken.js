// Import the jsonwebtoken library
const jwt = require('jsonwebtoken');

// Sample JWT token (replace with the token generated in the previous step)
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJ1c2VybmFtZSI6ImpvaG4uZG9lIiwiaWF0IjoxNzExNDI5NTg2LCJleHAiOjE3MTE0MzMxODZ9.r8g0LlPjnSnT5wh7OuAqJOjtGYXeamON_gsCDsR0QjU';

// Verify JWT token
jwt.verify(token, '12345', (err, decoded) => {
    if (err) {
        console.error('Error verifying JWT:', err.message);
    } else {
        console.log('Decoded JWT:', decoded);
    }
});
