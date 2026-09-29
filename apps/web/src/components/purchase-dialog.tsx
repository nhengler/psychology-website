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

export function PurchaseDialog() {
  const { isSignedIn } = useUser();
  const clerk = useClerk();

  const [open, setOpen] = useState(false);

  function handleUserPurchase() {
    if (isSignedIn) {
      console.log("Usuário logado: seguir para pagamento");
      return;
    }

    setOpen(true);
  }

  function handleCreateAccount() {
    setOpen(false);
    clerk.openSignUp({});
  }

  function handleGuestPurchase() {
    console.log("Usuário escolheu comprar como convidado");
  }

  return (
    <>
      <Button onClick={handleUserPurchase}>Comprar</Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Continue sua compra</DialogTitle>

            <DialogDescription>
              Crie uma conta para acompanhar seus conteúdos ou continue sua
              compra como convidado.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-3">
            <Button onClick={handleCreateAccount}>Criar uma conta</Button>

            <Button variant="outline" onClick={handleGuestPurchase}>
              Comprar como convidado
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
