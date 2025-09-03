import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './app/styles/global.scss';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/providers/store';
import { AppQueryClientProvider } from './app/providers/queryClient';
import { router } from './app/router/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppQueryClientProvider>
        <RouterProvider router={router} />
      </AppQueryClientProvider>
    </Provider>
  </StrictMode>
);
