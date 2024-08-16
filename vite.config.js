import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5174, // 确保端口是你要使用的
  },
  base: '/personal_website/',  // 将 <REPOSITORY_NAME> 替换为你的 GitHub 仓库名称
  plugins: [vue()],
})
