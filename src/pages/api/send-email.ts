import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
import handlebars from "handlebars";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { nameAndLastname, phone, email, message } = req.body;

    if (!nameAndLastname || !phone || !email || !message) {
      return res.status(400).json({ error: "Faltan campos requeridos." });
    }

    const templatePath = path.join(
      process.cwd(),
      "src",
      "templates",
      "emailTemplate.hbs"
    );
    const emailTemplate = fs.readFileSync(templatePath, "utf8");

    const compiledTemplate = handlebars.compile(emailTemplate);


    const templateForMePath = path.join(
      process.cwd(),
      "src",
      "templates",
      "emailTemplateForMe.hbs"
    );
    const emailTemplateForMe = fs.readFileSync(templateForMePath, "utf8");

    const compiledTemplateForMe = handlebars.compile(emailTemplateForMe);

    const htmlContentForMe = compiledTemplateForMe({
      nombre: nameAndLastname,
      message: message,
      email: email,
      phone: phone
    });



    const htmlContent = compiledTemplate({
      nombre: nameAndLastname,
    });

    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptionsUser = {
      from: "Random Agencia",
      to: email,
      subject: "Nuevo mensaje - RANDOM AGENCIA",

      html: htmlContent,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
    };

    const mailOptionsMe = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Nuevo mensaje de contacto - RANDOM AGENCIA",
      html: htmlContentForMe,
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
    };


    transporter.sendMail(mailOptionsUser, function (error, info) {
      if (error) {
        console.error("Error al enviar el correo:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
      } else {
        console.log("Correo enviado:", info.response);
        return res
          .status(200)
          .json({ message: "Correo enviado exitosamente." });
      }
    });

    transporter.sendMail(mailOptionsMe, function (error, info) {
      if (error) {
        console.error("Error al enviar el correo:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
      } else {
        console.log("Correo enviado:", info.response);
        return res
          .status(200)
          .json({ message: "Correo enviado exitosamente." });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Método ${req.method} no permitido.`);
  }
}
