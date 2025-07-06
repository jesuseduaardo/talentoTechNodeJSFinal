import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

//Middleware para verificar el token JWT
export const authentication = (req, res, next) => {

    if (!req.headers['authorization']) return mustBeLoggedMessage(res)
    const token = req.headers['authorization'].split(" ")[1];

    if (!token) return mustBeLoggedMessage(res)

    jwt.verify(token, secret_key, (err) => {
        return err ? mustBeLoggedMessage(res) : next();
    });

}

const mustBeLoggedMessage = (res) => {
    return res.status(403).json({ error: 'No tiene permiso para acceder a esta pagina' });
}