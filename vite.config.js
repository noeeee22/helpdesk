import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path from "path";
import vue from '@vitejs/plugin-vue'

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from '@primevue/auto-import-resolver';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ["./src/**"],
      resolvers: [PrimeVueResolver()],
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"]
        }
      ],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: true
    }),
    AutoImport({
      dts: true
    })
  ],
  server: {
    host: true,
    port: 5174
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
