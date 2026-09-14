import { existsSync, readFileSync } from 'node:fs';
import { strict as assert } from 'node:assert';

const rootUrl = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, rootUrl), 'utf8');

const layout = read('src/layouts/Layout.astro');
const config = read('astro.config.mjs');

assert.match(config, /site:\s*['"]https:\/\/legongoraek\.me['"]/);
assert.doesNotMatch(config, /luisenriquegongoraek\.com/);

assert.match(layout, /rel="canonical"/);
assert.match(layout, /name="robots"/);
assert.match(layout, /name="twitter:card"/);
assert.match(layout, /property="og:locale"/);
assert.match(layout, /application\/ld\+json/);
assert.match(layout, /https:\/\/legongoraek\.me/);
assert.doesNotMatch(layout, /luisenriquegongoraek\.com/);
assert.match(layout, /#person/);
assert.match(layout, /ProfilePage/);
assert.match(layout, /WebSite/);

for (const path of ['public/robots.txt', 'public/sitemap.xml', 'public/llms.txt']) {
  assert.ok(existsSync(new URL(path, rootUrl)), `${path} must exist`);
}

assert.match(read('public/robots.txt'), /Sitemap:\s*https:\/\/legongoraek\.me\/sitemap\.xml/);
assert.match(read('public/sitemap.xml'), /<loc>https:\/\/legongoraek\.me\/<\/loc>/);
assert.match(read('public/llms.txt'), /Luis Enrique Góngora Ek/);
assert.match(read('public/llms.txt'), /https:\/\/github\.com\/legongoraek/);

console.log('SEO/GEO verification passed');
