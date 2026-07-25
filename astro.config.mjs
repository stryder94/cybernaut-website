import { defineConfig } from "astro/config";
import icon from "astro-icon";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [icon()],

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  adapter: cloudflare(),
});