import express from 'express';

const public_routes = express.Router();

public_routes.post('/register', (req, res) => {
    console.log("funfou");
});



export default public_routes;