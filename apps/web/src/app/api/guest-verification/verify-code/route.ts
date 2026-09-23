import { createHmac, timingSafeEqual } from 'node:crypto'

import { guestPurchaseVerification } from "@/services/utils/guest-purchase-verification";

export async function POST(request: Request) {
  const { email, code } = await request.json()

  if (
    !email ||
    typeof email !== 'string' ||
    !code ||
    typeof code !== 'string'
  ) {
    return Response.json(
      { error: 'E-mail e código são obrigatórios.' },
      { status: 400 }
    )
  }

  const normalizedEmail = email.trim().toLowerCase()

  const record = guestPurchaseVerification.get(normalizedEmail)

  if (!record) {
    return Response.json(
      { error: 'Código não encontrado.' },
      { status: 400 }
    )
  }

  if (Date.now() > record.expiresAt) {
    guestPurchaseVerification.delete(normalizedEmail)

    return Response.json(
      { error: 'Código expirado.' },
      { status: 400 }
    )
  }

  if (record.attempts >= 5) {
    guestPurchaseVerification.delete(normalizedEmail)

    return Response.json(
      { error: 'Número máximo de tentativas excedido.' },
      { status: 429 }
    )
  }

  record.attempts++

  const otpSecret = process.env.OTP_SECRET

  if (!otpSecret) {
    return Response.json(
      { error: 'OTP_SECRET não configurado.' },
      { status: 500 }
    )
  }

  const receivedHash = createHmac('sha256', otpSecret)
    .update(code)
    .digest('hex')

  const isValid = timingSafeEqual(
    Buffer.from(record.codeHash, 'hex'),
    Buffer.from(receivedHash, 'hex')
  )

  if (!isValid) {
    return Response.json(
      { error: 'Código inválido.' },
      { status: 400 }
    )
  }

  guestPurchaseVerification.delete(normalizedEmail)

  return Response.json({
    verified: true,
  })
}