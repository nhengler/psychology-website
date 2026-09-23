import { createHmac, randomInt } from "node:crypto";

import { resend } from "@/services/utils/resend";
import { guestPurchaseVerification } from "@/services/utils/guest-purchase-verification";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return Response.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const normalizedEmail = email.trim().toLowerCase();

  const code = randomInt(100000, 1000000).toString();

  const otpSecret = process.env.OTP_SECRET;

  if (!otpSecret) {
    return Response.json(
      { error: "OTP_SECRET não configurado." },
      { status: 500 }
    );
  }

  const codeHash = createHmac("sha256", otpSecret).update(code).digest("hex");

  guestPurchaseVerification.set(normalizedEmail, {
    codeHash,
    expiresAt: Date.now() + 10 * 60000,
    attempts: 0,
  });

  const { error } = await resend.emails.send({
    from: "Psicóloga Ana Oliveira <onboarding@resend.dev>",
    to: [normalizedEmail],
    subject: "Seu código de verificação",
    html: `
        <p>Seu código de verificação é:</p>
        <h1>${code}</h1>
        <p>Este código expira em 10 minutos.</p>
      `,
  });

  if (error) {
    guestPurchaseVerification.delete(normalizedEmail);

    return Response.json(
      { error: "Não foi possível enviar o código." },
      { status: 500 }
    );
  }

  return Response.json({
    success: true,
  });
}
