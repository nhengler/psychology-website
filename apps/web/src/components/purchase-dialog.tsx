"use client";

import { useState } from "react";
import { useClerk, useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

//dialog functions config
export function PurchaseDialog() {
  const { isSignedIn } = useUser();
  const clerk = useClerk();

  const [open, setOpen] = useState(false);

  function handleCreateAccount() {
    setOpen(false);
    clerk.openSignUp({});
  }

  type PurchaseStep = "choice" | "guest-email" | "verify-code";

  const [step, setStep] = useState<PurchaseStep>("choice");
  const [guestEmail, setGuestEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  function handleUserPurchase() {
    if (isSignedIn) {
      console.log("Usuário logado: seguir para pagamento");
      return;
    }

    setOpen(true);
  }

  function handleGuestPurchase() {
    setStep("guest-email");
  }

  //send code function
  async function handleSendCode() {
    const response = await fetch("/api/guest-verification/send-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: guestEmail,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data.error);
      return;
    }

    setStep("verify-code");
  }

  //verify code function
  async function handleVerifyCode() {
    if (verificationCode.length !== 6) {
      console.error("Digite os 6 dígitos do código.");
      return;
    }

    const response = await fetch("/api/guest-verification/verify-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: guestEmail,
        code: verificationCode,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data.error);
      return;
    }

    console.log("Código verificado com sucesso.");
  }

  return (
    <>
      <Button onClick={handleUserPurchase}>Comprar</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader className="flex flex-col gap-4 items-center">
            <DialogTitle>Continue sua compra</DialogTitle>

            <DialogDescription>
              Crie uma conta para acompanhar seus conteúdos ou continue sua
              compra como convidado.
            </DialogDescription>
          </DialogHeader>

          {step === "choice" && (
            <div className="flex flex-col gap-3">
              <Button onClick={handleCreateAccount}>Criar uma conta</Button>

              <Button variant="outline" onClick={handleGuestPurchase}>
                Comprar como convidado
              </Button>
            </div>
          )}

          {step === "guest-email" && (
            <div className="flex flex-col gap-3">
              <label htmlFor="guest-email">E-mail</label>

              <input
                id="guest-email"
                type="email"
                value={guestEmail}
                onChange={function (event) {
                  setGuestEmail(event.target.value);
                }}
                placeholder="seuemail@exemplo.com"
                className="border rounded-md px-3 py-2"
              />

              <Button onClick={handleSendCode}>Enviar código</Button>
            </div>
          )}

          {step === "verify-code" && (
            <div className="flex flex-col gap-4 items-center">
              <p>Enviamos um código de verificação para:</p>

              <strong>{guestEmail}</strong>

              <InputOTP
                maxLength={6}
                value={verificationCode}
                onChange={setVerificationCode}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>

              <Button className="mt-2" onClick={handleVerifyCode}>
                Confirmar código
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
