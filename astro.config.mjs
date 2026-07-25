import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  integrations: [icon()],
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});