import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    host: true
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "CRUD Employes App",
        short_name: "CRUD App",
        description: "Aplicación CRUD básica con LocalStorage y soporte offline",
        start_url: "/",
        display: "standalone",
        theme_color: "rgba(106, 13, 173, 0.3)",
        screenshots: [
          {
            src: "/screenshots/2000x1086.jpg",
            sizes: "2000x1086",
            type: "image/jpg",
            form_factor: "wide"
          },
          {
            src: "/screenshots/1280x1920.jpg",
            sizes: "1280x1920",
            type: "image/jpg",
            form_factor: "narrow"
          }
        ],
        icons: [
          {
            src: "/icons/512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/icons/128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
