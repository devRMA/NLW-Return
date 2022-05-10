import express from "express";
import nodemailer from "nodemailer";

import { prisma } from "./prisma";

export const routes = express.Router();

const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 2525,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

routes.post("/feedbacks", async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        },
    });

    await transport.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "Novo Feedback",
        html: [
            `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
            `<p>Tipo do Feedback ${type}</p>`,
            `<p>Comentário ${comment}</p>`,
            `</div>`,
        ].join("\n"),
    });

    return res.status(201).json({
        data: feedback,
    });
});
