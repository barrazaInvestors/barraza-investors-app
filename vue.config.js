const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./", //antes era '/'
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/scss/_variables.scss";
        `,
      },
    },
  },
  pwa: {
    name: "Barraza Investors",
    themeColor: "#37b7e3",
    msTileColor: "#37b7e3", // Color de la barra de tareas en dispositivos Windows
    appleMobileWebAppCapable: "yes", // Habilitar el modo pantalla completa en dispositivos iOS
    appleMobileWebAppStatusBarStyle: "#37b7e3", // Color de la barra de estado en dispositivos iOS
    manifestOptions: {
      icons: [
        {
          src: "./img/icons/logo-icon-pwa.png", // Ruta relativa al archivo de icono
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "./img/icons/logo-icon-pwa.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "./img/icons/logo-icon-pwa.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "./img/icons/logo-icon-pwa.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "./img/icons/logo-icon-pwa.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./img/icons/logo-icon-pwa.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
      start_url: "/", // URL de inicio de la aplicación
      display: "standalone", // Estilo de visualización de la aplicación
      background_color: "#37b7e3", // Color de fondo de la pantalla de carga inicial
    },
  },
});
