import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const pages = [
  { route: 'index.html', locale: 'es', headline: 'Lleva la IA', service: 'Identifica oportunidades' },
  { route: 'en/index.html', locale: 'en', headline: 'Bring AI', service: 'Find the right opportunity' },
];

for (const { route, locale, headline, service } of pages) {
  test(`built ${locale} page renders AI business section, navigation and safe contact CTAs`, () => {
    const html = readFileSync(new URL(`../dist/${route}`, import.meta.url), 'utf8');

    assert.match(html, /<section\b[^>]*id="ia-negocios"/, 'AI section must be rendered');
    assert.match(html, /href="#ia-negocios"/, 'desktop/mobile navigation must reach AI section');
    assert.ok(html.includes(headline), `Missing ${locale} headline`);
    assert.ok(html.includes(service), `Missing ${locale} service description`);
    assert.match(html, /href="https:\/\/wa\.me\/[0-9]+\?text=/, 'WhatsApp CTA must be available');
    assert.match(html, /href="#contacto"/, 'fallback contact CTA must exist');
    assert.doesNotMatch(html, /id="(?:tech-stack|stack)"|href="#(?:tech-stack|stack)"/i,
      'Hidden technology-stack section must not be linked or rendered');
  });
}
