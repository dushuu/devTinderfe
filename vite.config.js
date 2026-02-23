import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname( fileURLToPath( import.meta.url ) )
const API_TARGET = 'http://localhost:3000'
const proxyRoutes = [
  '/login',
  '/signup',
  '/logout',
  '/profile',
  '/changePassword',
  '/request',
  '/user',
]

// https://vite.dev/config/
export default defineConfig( {
  plugins: [ tailwindcss(), react() ],
  resolve: {
    alias: { '@': path.resolve( __dirname, './src' ) },
  },
  server: {
    proxy: Object.fromEntries(
      proxyRoutes.map( ( route ) => [ route, { target: API_TARGET, changeOrigin: true } ] ),
    ),
  },
} )
