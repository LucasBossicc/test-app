import express from 'express';
import { Pool } from 'pg';

const app = express();

const PUERTO = process.env.PORT || 3000;

app.get('/test', (req, res) => {
  res.send('test funcionando');
});

app.listen(PUERTO)
