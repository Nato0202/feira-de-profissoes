import { connection } from '../config/db.js';

export async function createUser(name, email, password) {
    const [result] = await connection.execute(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, password]
    );
    return result.insertId;
}

export async function getUserByEmail(email) {
    const [rows] = await connection.execute(
        'SELECT * FROM users WHERE email = ?',
        [email]
    );
    return rows[0];
}

export async function getUserById(id) {
    const [rows] = await connection.execute(
        'SELECT id, name, email FROM users WHERE id = ?',
        [id]
    );
    return rows[0];
}
