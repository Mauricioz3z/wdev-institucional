import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const root = resolve(__dirname);

export default defineConfig({
  plugins: [vue()],
  appType: 'mpa',
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        solucoes: resolve(root, 'solucoes/index.html'),
        fazenda: resolve(root, 'solucoes/sistema-para-fazenda/index.html'),
        pecuaria: resolve(root, 'solucoes/software-para-pecuaria/index.html'),
        transportadora: resolve(root, 'solucoes/sistema-para-transportadora-agro/index.html'),
        cooperativa: resolve(root, 'solucoes/sistema-para-cooperativa/index.html'),
        insumos: resolve(root, 'solucoes/sistema-para-empresa-de-insumos/index.html'),
        agroindustria: resolve(root, 'solucoes/software-para-agroindustria/index.html'),
      },
    },
  },
});
