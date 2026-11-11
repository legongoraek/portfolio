import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../src/components/${path}`, import.meta.url), 'utf8');

// Cada entrada de la lista es un bloque `  {` ... `  },` dentro del array.
const entries = (source, listName) => {
  const start = source.indexOf(`const ${listName} = [`);
  const end = source.indexOf('\n];', start);
  return source.slice(start, end).split('\n  {').slice(1);
};

// `en: {...}` va en una sola línea y en JSON (ver Projects.astro / Experience.astro).
const enOf = (block) => {
  const line = block.split('\n').find((l) => l.startsWith('    en: {'));
  return line && JSON.parse(line.slice('    en: '.length).trimEnd().replace(/,$/, ''));
};

test('every project has its English text', () => {
  const blocks = entries(read('Projects.astro'), 'projects');
  assert.ok(blocks.length > 0);
  for (const block of blocks) {
    const title = block.match(/title: "([^"]+)"/)[1];
    const en = enOf(block);
    assert.ok(en, `Missing en for project: ${title}`);
    assert.ok(en.description, `Missing en.description for project: ${title}`);
    const impact = JSON.parse(block.match(/impact: (\[.*\])/)[1]);
    assert.equal(en.impact?.length, impact.length, `en.impact length differs for project: ${title}`);
  }
});

test('project cards keep public repository data without displaying repository links', () => {
  const source = read('Projects.astro');
  const blocks = entries(source, 'projects');

  for (const title of ['LicitaBot', 'MapUniversity', 'FindMyJob', 'Moments']) {
    const project = blocks.find((block) => block.includes(`title: "${title}"`));
    assert.ok(project, `Missing project: ${title}`);
    assert.doesNotMatch(project, /^\s+repository:/m);
  }

  const findMyJob = blocks.find((block) => block.includes('title: "FindMyJob"'));
  const mapUniversity = blocks.find((block) => block.includes('title: "MapUniversity"'));
  assert.match(findMyJob, /link: "https:\/\/find-my-job-delta\.vercel\.app"/);
  assert.match(mapUniversity, /link: "https:\/\/mapuniversity\.vercel\.app\//);

  const publicRepositories = new Map([
    ['Dashboard SpaceX - Amerisa Logistics', 'https://github.com/legongoraek/amerisa-spacex-dashboard'],
    ['Dashboard Crypto - Dinametra', 'https://github.com/legongoraek/dinametra-dashboard'],
    ['Dashboard Garmin Connect', 'https://github.com/legongoraek/dashboard-garmin'],
    ['KYB Customs Platform', 'https://github.com/legongoraek/kyb-customs-platform'],
    ['Connect to Analytics', 'https://github.com/legongoraek/connect-to-analytics'],
  ]);

  for (const [title, repository] of publicRepositories) {
    const project = blocks.find((block) => block.includes(`title: "${title}"`));
    assert.ok(project, `Missing project: ${title}`);
    assert.ok(project.includes(`repository: "${repository}"`), `Missing public repo for ${title}`);
  }

  assert.doesNotMatch(source, /repository-link/);
  assert.doesNotMatch(source, /GitHub · public repository/);
  assert.doesNotMatch(source, /GitHub · repositorio público/);
});

test('every experience entry has its English text', () => {
  const blocks = entries(read('Experience.astro'), 'experiences');
  assert.ok(blocks.length > 0);
  for (const block of blocks) {
    const role = block.match(/role: '([^']+)'/)[1];
    const en = enOf(block);
    assert.ok(en, `Missing en for experience: ${role}`);
    assert.ok(en.period, `Missing en.period for experience: ${role}`);
    const achievements = block.split('achievements: [')[1].split('\n    ]')[0].match(/^ {6}'/gm).length;
    assert.equal(en.achievements?.length, achievements, `en.achievements length differs for experience: ${role}`);
  }
});
