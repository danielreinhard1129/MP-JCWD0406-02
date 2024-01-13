import bcrypt from 'bcrypt'

export async function hashPassword(password: string): Promise<string> {
    const saltRound = 10;
    return await bcrypt.hash(password, saltRound)
}