// src/App.tsx
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router } from "./shared/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { SessionProvider } from "./provider/sessionProvider";
import { ModalProvider } from "./provider/modalProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider>
        <ReactQueryDevtools />
        <ModalProvider>
          <Toaster />
          <Router />
        </ModalProvider>
      </SessionProvider>
    </QueryClientProvider>
  );
}
