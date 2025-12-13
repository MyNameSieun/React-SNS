// src/hooks/mutations/useSignInWithPassword.ts
import { signInWithPassword } from "@/services/auth";
import type { UseMutationCallback } from "@/types/useMutationCallback";
import { useMutation } from "@tanstack/react-query";

export const useSignInWithPassword = (callbacks?: UseMutationCallback) => {
  return useMutation({
    mutationFn: signInWithPassword,
    onError: (error) => {
      console.error(error);

      if (callbacks?.onError) callbacks.onError(error);
    },
  });
};
