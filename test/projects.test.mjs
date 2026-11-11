import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const projects = JSON.parse(
  fs.readFileSync(new URL('../src/data/projects.json', import.meta.url), 'utf8'),
);
const projectsComponent = fs.readFileSync(
  new URL('../src/components/Projects.astro', import.meta.url),
  'utf8',
);

const expectedProjects = [
  {
    title: 'Renta lo que quieras',
    link: 'https://renta-lo-que-quieras.vercel.app/',
  },
  {
    title: 'Portfolio Assistant',
    link: 'https://portafolio-astro-smoky.vercel.app/',
  },
  {
    title: 'Dashboard Crypto - Dinametra',
    link: 'https://dinametra-dashboard.netlify.app/',
  },
  {
    title: 'Medular AI – Plataforma Clínica / EHR',
    link: 'https://medular-ai.vercel.app/',
  },
];

test('includes the requested projects in the project data', () => {
  for (const expectedProject of expectedProjects) {
    assert.ok(
      projects.some(
        (project) =>
          project.title === expectedProject.title && project.link === expectedProject.link,
      ),
      `Missing project: ${expectedProject.title}`,
    );
  }

  assert.match(
    projects.find((project) => project.title === 'Portfolio Assistant')?.description ?? '',
    /legongoraek\.github\.io/,
  );

  const medular = projects.find((project) => project.title === 'Medular AI – Plataforma Clínica / EHR');
  assert.ok(medular, 'Missing Medular AI project');
  assert.deepEqual(medular.technologies, ['EHR', 'DICOM', 'Orthanc', 'OHIF', 'FHIR']);
  assert.match(medular.description, /RIS\/PACS/);
  assert.match(medular.description, /IA clínica/i);
});

test('keeps the established inline project list structure', () => {
  assert.match(projectsComponent, /const projects = \[/);

  for (const expectedProject of expectedProjects) {
    assert.match(projectsComponent, new RegExp(`title: ["']${expectedProject.title}["']`));
    assert.match(projectsComponent, new RegExp(`link: ["']${expectedProject.link.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}["']`));
  }

  assert.match(projectsComponent, /RIS\/PACS/);
  assert.match(projectsComponent, /Orthanc/);
  assert.match(projectsComponent, /OHIF/);
  assert.match(projectsComponent, /FHIR/);
});

test('private repository links are not exposed in portfolio project data', () => {
  for (const title of ['LicitaBot', 'MapUniversity', 'FindMyJob', 'Moments']) {
    const project = projects.find((item) => item.title === title);
    assert.ok(project, `Missing project: ${title}`);
    assert.equal(project.repository, undefined);
  }
});

test('public repositories are listed for their matching projects', () => {
  const publicRepositories = new Map([
    ['Dashboard SpaceX - Amerisa Logistics', 'https://github.com/legongoraek/amerisa-spacex-dashboard'],
    ['Dashboard Crypto - Dinametra', 'https://github.com/legongoraek/dinametra-dashboard'],
    ['Dashboard Garmin Connect', 'https://github.com/legongoraek/dashboard-garmin'],
    ['KYB Customs Platform', 'https://github.com/legongoraek/kyb-customs-platform'],
    ['Connect to Analytics', 'https://github.com/legongoraek/connect-to-analytics'],
  ]);

  for (const [title, repository] of publicRepositories) {
    assert.equal(projects.find((item) => item.title === title)?.repository, repository);
  }
});

test('keeps Projects.astro and projects.json in sync', () => {
  const componentTitles = [...projectsComponent.matchAll(/^\s*title: ["'](.+?)["'],?$/gm)].map((m) => m[1]);
  assert.deepEqual(
    componentTitles,
    projects.map((project) => project.title),
    'Projects.astro and src/data/projects.json must list the same projects in the same order',
  );
});
