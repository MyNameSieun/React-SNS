// src/App.tsx
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Router } from "./shared/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Router />
    </QueryClientProvider>
  );
}
