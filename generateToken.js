// Import the jsonwebtoken library
const jwt = require('jsonwebtoken');

// Sample user data
const user = {
    id: 123,
    username: 'swathi'
};

// Generate JWT token
const token = jwt.sign(user, '12345', { expiresIn: '1h' });

console.log('Generated JWT:', token);
