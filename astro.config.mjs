import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import netlify from "@astrojs/netlify";

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
});
