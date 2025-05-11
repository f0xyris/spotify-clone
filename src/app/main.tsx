import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from '@routeTree';
import { Provider } from "react-redux";
import {store} from "@shared/store/store.js";
import { PlayerProvider } from "@hooks/PlayerContext";
import { createBrowserHistory } from '@tanstack/history'

const history = createBrowserHistory();
const router = createRouter({ routeTree, history })

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
    },
  },
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <PlayerProvider>
        <RouterProvider router={router} />
        </PlayerProvider>
      </Provider>
    </QueryClientProvider>
  )
}


