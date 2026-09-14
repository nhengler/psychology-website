type VerificationRecord = {
  codeHash: string;
  expiresAt: number;
  attempts: number;
};

/**
 * Referência ao objeto global do ambiente atual.
 *
 * `globalThis` é nativo do JavaScript (equivalente ao 'window.algumaCoisa' para navegador).
 * Aqui apenas informamos ao TypeScript
 * que ele também pode conter a propriedade `guestPurchaseVerification`,
 * usada para preservar temporariamente os códigos durante o desenvolvimento.
 */
const globalStore = globalThis as unknown as {
  guestPurchaseVerification?: Map<string, VerificationRecord>;
};

export const guestPurchaseVerification =
  globalStore.guestPurchaseVerification ?? new Map<string, VerificationRecord>();

if (process.env.NODE_ENV !== "production") {
  globalStore.guestPurchaseVerification = guestPurchaseVerification;
}
