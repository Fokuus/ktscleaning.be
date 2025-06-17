import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";
import path from "path";

export default defineConfig({
  site: "https://www.fokuus.nl", // Updated to Fokuus domain
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !page.includes("/admin"),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  output: "static",
  adapter: netlify(),
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components'),
        '@layouts': path.resolve('./src/layouts'),
        '@styles': path.resolve('./src/styles'),
        '@assets': path.resolve('./src/assets')
      }
    }
  }
});
