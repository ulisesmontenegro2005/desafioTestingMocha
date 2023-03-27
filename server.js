import express, { json } from 'express';
import productsRouter from './router/routes.js';

export const app = express();

app.use(json())
app.use('/api', productsRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('Escuchando en', PORT);
})




