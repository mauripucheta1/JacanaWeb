import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      fs: {
        allow: [
          './',               // Permitir el acceso al directorio raíz del frontend
          '../node_modules',  // Permitir acceso a las dependencias instaladas
          '../BackEnd',       // Si alguna referencia al backend es necesaria (opcional)
        ],
      },
    },
  },
});