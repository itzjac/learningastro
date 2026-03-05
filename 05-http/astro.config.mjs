// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

import cloudflare from '@astrojs/cloudflare';

import db from '@astrojs/db';

export const prerender = false;

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), db()],
  output: "server",
  adapter: cloudflare(),
});