import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unfonts from 'unplugin-fonts/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unfonts({
      google: {
        families: ['Roboto', 'Roboto Condensed']
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
            @import "@/assets/_reset.sass"
            @import "@/assets/_variables.sass"
            @import "@/assets/_global.sass"
          `
      }
    }
  }
})
