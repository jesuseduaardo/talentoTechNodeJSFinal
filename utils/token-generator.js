import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

export const generateToken = (userData) => {
    const { id, email } = userData;
    const user = { id, email };
    const expiration = { expiresIn: '1h' };

    return jwt.sign(user, secret_key, expiration);
}