import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from '@keystatic/astro';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://changelogs-edge-ui.vercel.app',
  output: 'hybrid',
  integrations: [react(), markdoc(), keystatic()],
  adapter: vercel()
});