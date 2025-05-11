import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import vercel from 'vite-plugin-vercel'

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
    vercel(),
  ],
  server: {
    host: '127.0.0.1',
    hmr: {
      overlay: false
    }
  },
  base: process.env.VITE_BASE_PATH || '/spotify-clone',
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routeTree': path.resolve(__dirname, 'src/routeTree.gen.ts') 
    }
  },
  build: {
    chunkSizeWarningLimit: 4000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('youtube')) return 'youtube-sdk';
            if (id.includes('redux')) return 'redux';
            if (id.includes('react-query')) return 'react-query';
            return 'vendor';
          }
        },
      },
    },
  },
})
