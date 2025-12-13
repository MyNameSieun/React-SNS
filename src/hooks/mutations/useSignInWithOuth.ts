// src/hooks/mutations/useSignInWithOuth.ts
import { signInWithOAuth } from "@/services/auth";
import type { UseMutationCallback } from "@/types/useMutationCallback";
import { useMutation } from "@tanstack/react-query";

export const useSignInWithOuth = (callbacks: UseMutationCallback) => {
  return useMutation({
    mutationFn: signInWithOAuth,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
};
