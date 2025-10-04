import express from 'express';
import { cadastrar_usuario } from '../controller/public-controller.js';


const public_routes = express.Router();

public_routes.post('/register', (req, res) => {
    cadastrar_usuario(req, res);
});



export default public_routes;