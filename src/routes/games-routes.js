import express from 'express';
import { listar_jogos, listar_jogos_id, publicar_jogo } from '../controller/games-controller.js';

const games_routes = express.Router();

games_routes.post('/', (req, res) => {
    publicar_jogo(req, res);
});

games_routes.get('/', (req, res) => {
    listar_jogos(req, res);
});

games_routes.get('/:id', (req, res) => {
    listar_jogos_id(req, res);
});

export default games_routes;
