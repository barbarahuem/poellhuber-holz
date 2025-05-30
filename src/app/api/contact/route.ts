import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // wichtig für Server-only

export async function POST(request: Request) {
  const data = await request.json();
  console.log("Empfangene Formulardaten:", data);

  const {
    email,
    name,
    surname,
    phone,
    plz,
    city,
    message,
    product,
    quantity,
    deliveryType,
  } = data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "Neue Anfrage über das Formular",
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Absender*in:</strong> ${email}</p>
        <p><strong>Telefonnummer:</strong> ${phone} </p>
        <p><strong>PLZ:</strong> ${plz}</p>
        <p><strong>Ort:</strong> ${city}</p>
        <hr>
        ${
          product
            ? `<p><strong>Produkt:</strong> ${product}</p>
          <p><strong>Menge:</strong> ${quantity} </p>`
            : ""
        }
        <p><strong>Lieferoption:</strong> ${deliveryType}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Bestätigung: Ihre Anfrage ist eingegangen",
      html: `
        <h2>Danke für Ihre Anfrage!</h2>
        <p>Wir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich bei Ihnen.</p>
        <p>Mit freundlichen Grüßen,<br/>Pöllhuber Holz</p>
        <hr>
        <h2 style="color: grey;">Ihre Nachricht:</h2>
        ${
          product
            ? `<p><strong>Produkt:</strong> ${product}</p>
          <p><strong>Menge:</strong> ${quantity} </p>`
            : ""
        }
        <p><strong>Lieferoption:</strong> ${deliveryType}</p>
        <p style="color: grey;"><strong>Nachricht:</strong></p>
        <p style="color: grey;">${message}</p>
                
      `,
    });

    return NextResponse.json(
      { message: "E-Mail erfolgreich gesendet." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Fehler beim E-Mail-Versand:", error);
    return NextResponse.json(
      { message: "E-Mail-Versand fehlgeschlagen." },
      { status: 500 },
    );
  }
}
