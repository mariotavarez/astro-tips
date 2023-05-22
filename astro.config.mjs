import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import robotsTxt from "astro-robots-txt";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrobuild.tips',
  integrations: [tailwind({}), react(), mdx(), vue(), svelte(), robotsTxt(), sitemap()]
});