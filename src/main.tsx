import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { StoreProvider } from './app/providers/StoreProvider';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <StoreProvider>
        <App />
      </StoreProvider>
    </QueryClientProvider>
  </StrictMode>
);
