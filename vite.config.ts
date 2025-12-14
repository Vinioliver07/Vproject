import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      build: {
        // Otimizações de performance
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.log em produção
            drop_debugger: true,
          },
        },
        rollupOptions: {
          output: {
            // Code splitting para melhor cache
            manualChunks: {
              'react-vendor': ['react', 'react-dom'],
              'lucide': ['lucide-react'],
            },
          },
        },
        // Limite de aviso de chunk aumentado
        chunkSizeWarningLimit: 600,
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
