// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://antonsavchenko-try-astro.netlify.app/",
  integrations: [preact()],
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
  },
});
