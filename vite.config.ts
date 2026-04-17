import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // Vite 8 Rolldown: some CJS deps (e.g. mixed default/__esModule exports) need the
    // pre-v8 default-import behavior or React gets a module object instead of a component.
    // https://vite.dev/guide/migration#consistent-commonjs-interop
    legacy: {
      inconsistentCjsInterop: true,
    },
    plugins: [
      react(),
      checker({
        typescript: true,
        // eslint: {
        //   useFlatConfig: true,
        //   lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
        // },
        overlay: {
          initialIsOpen: false,
        },
      }),
    ],
    preview: {
      port: Number(process.env.VITE_APP_PORT || 5001),
    },
    server: {
      host: '0.0.0.0',
      port: Number(process.env.VITE_APP_PORT || 5001),
    },
    base: process.env.VITE_BASENAME || '/',
    resolve: {
      tsconfigPaths: true,
    },
  });
};
