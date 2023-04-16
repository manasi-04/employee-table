import express from "express";
import * as dotenv from 'dotenv';
import pg from 'pg';
import { getData, insertData, tableQuery } from "./db/query.js";

dotenv.config();
const { Client } = pg;
const app = express();

export const client = new Client({
	user: process.env.DB_USER,
	host: process.env.HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: process.env.DB_PORT
});

client.connect();
client.query(tableQuery);
client.query(insertData);

app.get('/api', async (req, res) => {
	const data = await client.query(getData);
    return res.status(200).json(data.rows);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {console.log(`server started on port ${port}`)});