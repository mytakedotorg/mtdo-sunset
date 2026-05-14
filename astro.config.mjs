import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://mytake.org",
  markdown: {
    shikiConfig: { theme: "github-light" },
  },
});
