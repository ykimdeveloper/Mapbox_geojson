import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base for gh-pages
export default defineConfig({
  // base: '/Mapbox_geojson/',
  base: '/',
  plugins: [react()],
})
