import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function cadastrar_usuario(req, res) {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(404).json({mensagem: "Necessita de username e password na requisição."});
    };

    try {
        const new_user = await prisma.user.create({
            data: {
                username: username,
                password: password
            }
        });

        return res.status(201).json({mensagem: "Usuario cadastrado com sucesso. " ,new_user})

    } catch (error) {
        res.status(500).json({mensagem: "Erro interno no servidor."})
    }
}