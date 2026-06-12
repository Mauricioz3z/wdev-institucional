import 'dotenv/config';

import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

console.log(process.env.ZOHO_EMAIL);
console.log(process.env.ZOHO_PASSWORD);

const transporter = nodemailer.createTransport({
    host: 'smtppro.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: 'mauricio@wdevdigital.com.br',
        pass: 'gNyzVuxUQUQJ'
    }
});

await transporter.verify();

console.log('SMTP OK');

app.post('/enviar', async (req, res) => {
    try {

        const dados = req.body;

        const linhasHtml = Object.entries(dados)
            .map(([campo, valor]) => `
                <tr>
                    <td><strong>${campo}</strong></td>
                    <td>${valor ?? ''}</td>
                </tr>
            `)
            .join('');

        await transporter.sendMail({
            from: `Site WDev <${process.env.ZOHO_EMAIL}>`,
            to: process.env.ZOHO_EMAIL,
            replyTo: dados.email,
            subject: 'Novo Lead',
            html: `
                <h2>Novo Lead Recebido</h2>
                <table>
                    ${linhasHtml}
                </table>
            `
        });

        res.json({
            sucesso: true,
            mensagem: 'Contato enviado com sucesso.'
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao enviar contato.'
        });
    }
});

app.use(express.static(path.resolve(__dirname, '../dist')));



app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});