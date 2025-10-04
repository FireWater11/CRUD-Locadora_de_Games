import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

export async function publicar_jogo(req, res) {
    const { title, plataform } = req.body;

    if (!title || !plataform) {
        return res.status(404).json({ mensagem: "Necessita de title e plataform na requisição." })
    };

    try {

        const new_game = await prisma.games.create({
            data: {
                title: title,
                plataform: plataform
            }
        }); 

        return res.status(201).json({ mensagem: "Jogo cadastrado com sucesso. ", new_game });  

    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno no servidor." })
    };
};

export async function listar_jogos(req, res) {
    try {

        const all_games = await prisma.games.findMany();
        res.status(200).json({mensagem: "Jogos encontrados: " ,all_games})

    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno no servidor." })
    };
};

export async function listar_jogos_id(req, res) {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
        return res.status(400).json({ mensagem: "Necessita de id valido na requisição." })
    };

    try {
        const id_game = await prisma.games.findUnique({
            where: {
                id: Number(id)
            }
        });

        if (!id_game) {
            return res.status(404).json({ mensagem: "Jogo e ID não encontrado no banco de dados." })
        };

        res.status(200).json({ mensagem: "Jogo encontrado: ", id_game })

    } catch (error) {
        res.status(500).json({ mensagem: "Erro interno no servidor." })
    };
};