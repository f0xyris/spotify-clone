import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routeFileIgnorePattern: '/*.{js,jsx}',
      generatedRouteTree: '@routeTree.gen.ts',
    }), 
    tailwindcss(), 
    react({
      fastRefresh: true,
    }),
  ],
  server: {
    host: '127.0.0.1',
    hmr: {
      overlay: false
    }
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routeTree': path.resolve(__dirname, '@routeTree.gen.ts') 
    }
  },
  build: {
    chunkSizeWarningLimit: 4300,
  },
})
