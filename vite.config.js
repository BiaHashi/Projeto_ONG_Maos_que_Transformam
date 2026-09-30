import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Projeto_ONG_Maos_que_Transformam/',

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projetos: resolve(__dirname, 'projetos.html'),
        cadastro: resolve(__dirname, 'cadastro.html')
      }
    }
  }
})