import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import svgicon from 'vite-plugin-svgicon'
import path from 'path'

export default defineConfig({
  plugins: [
    svgicon({
      include: ['**/assets/svg/**/*.svg'],
      svgFilePath: path.join(__dirname, 'src/assets/svg'),
      component: "vue"
    }),
    VueDevTools(),
    vue()
  ],
})
