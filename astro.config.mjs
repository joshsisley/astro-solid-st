import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  // Enable Solid to support Solid JSX components.
  integrations: [solid(), sitemap(), tailwind()]
});