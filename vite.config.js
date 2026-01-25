import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        products: resolve(__dirname, "products.html"),
        platform: resolve(__dirname, "platform.html"),
        contact: resolve(__dirname, "contact.html"),
        waitlist: resolve(__dirname, "waitlist.html"),
      },
    },
    assetsInclude: [
      "**/*.jpeg",
      "**/*.jpg",
      "**/*.png",
      "**/*.svg",
      "**/*.gif",
    ],
    copyPublicDir: true,
  },
  plugins: [
    {
      name: "html-rewrite",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (!req.url.endsWith(".html") && req.url !== "/") {
            const htmlUrl = req.url + ".html";
            if (require("fs").existsSync(resolve(__dirname, "." + htmlUrl))) {
              req.url = htmlUrl;
            }
          }
          next();
        });
      },
    },
  ],
});
