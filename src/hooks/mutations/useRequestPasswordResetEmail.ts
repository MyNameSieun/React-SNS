// src/hoooks/matations/useRequestPasswordResetEmail.ts

import { requestPasswordResetEmail } from "@/services/auth";
import type { UseMutationCallback } from "@/types/useMutationCallback";
import { useMutation } from "@tanstack/react-query";

export const useRequestPasswordResetEmail = (
  callbacks?: UseMutationCallback,
) => {
  return useMutation({
    mutationFn: requestPasswordResetEmail,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
};
