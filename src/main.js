import express from 'express';
import public_routes from './routes/public-routes.js';


const api_central = express();

api_central.use(express.json())
api_central.use('/', public_routes);
// api_central.use('/games', );
// api_central.use('/rentals', );

api_central.listen(8080, () => {
    console.log("Servidor rodando na porta 8080.")
});