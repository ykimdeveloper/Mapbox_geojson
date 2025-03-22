import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/Mapbox_geojson/',
  plugins: [react()],
})
