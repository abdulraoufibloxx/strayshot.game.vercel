import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': 'https://fx11f43aw2.execute-api.eu-central-1.amazonaws.com'
  //   }
  // },
  plugins: [react()],
})
