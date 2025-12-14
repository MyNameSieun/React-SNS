// src/hooks/mutations/useUpdatePassword.ts
import { updatePassword } from "@/services/auth";
import type { UseMutationCallback } from "@/types/useMutationCallback";
import { useMutation } from "@tanstack/react-query";

export const useUpdatePassword = (callbacks?: UseMutationCallback) => {
  return useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
};
