import 'dotenv/config';
import express from 'express';
import { Pool } from 'pg';

//supabase conect
const pool = new Pool({
  host: process.env.BD_HOST,
  password: process.env.BD_PASS,
  user: process.env.BD_USER,
  database: process.env.BD_NAME,
   port: process.env.BD_PORT,

})
const app = express();

const PUERTO = process.env.PORT || 3000;


app.get('/test', (req, res) => {
  res.send('test funcionando');
});


app.get('/test-bd', async (req, res) => {
    const resultado = await pool.query('SELECT * FROM mensajes')
  res.json(resultado.rows);
});


app.listen(PUERTO)

//siempre que se haga un cambio en el codigo se reiniciara el servidor, con el comando "npm run dev" en la terminal.