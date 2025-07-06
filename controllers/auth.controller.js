import { getUser } from "../models/user.model.js";

// loguearse


export const login = async (req, res) => {
    const { email, password } = req.body;
    const token = await getUser({ email, password });
    return token ?
        res.json({ token }) :
        res.status(400).json({ error: `Usuario o contraseña invalida` })
}

