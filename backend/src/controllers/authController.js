import bcrypt from 'bcryptjs';
import { createUser, getUserByEmail, getUserById } from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

export async function register(req, res) {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await createUser(name, email, hashedPassword);
    const user = await getUserById(userId);

    res.json({
        user,
        token: generateToken(user.id)
    });
}

export async function login(req, res) {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    res.json({
        user: { id: user.id, name: user.name, email: user.email },
        token: generateToken(user.id)
    });
}
