import { StrictMode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { StoreProvider } from './app/providers/StoreProvider';
import { QueryProvider } from './app/providers/QueryProvider';
import Theme from './app/providers/ThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <ReactQueryDevtools initialIsOpen={false} />
      <StoreProvider>
        <Theme>
          <App />
        </Theme>
      </StoreProvider>
    </QueryProvider>
  </StrictMode>
);
