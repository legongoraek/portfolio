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
    title: 'RIS PACS AI – Plataforma Clínica / EHR',
    link: '',
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

  const risPacs = projects.find((project) => project.title === 'RIS PACS AI – Plataforma Clínica / EHR');
  assert.ok(risPacs, 'Missing RIS PACS AI project');
  assert.deepEqual(risPacs.technologies, ['EHR', 'DICOM', 'Orthanc', 'OHIF', 'FHIR']);
  assert.match(risPacs.description, /RIS\/PACS/);
  assert.match(risPacs.description, /IA clínica/i);
});

test('keeps the established inline project list structure', () => {
  assert.match(projectsComponent, /const projects = \[/);

  for (const expectedProject of expectedProjects) {
    assert.match(projectsComponent, new RegExp(`title: ["']${expectedProject.title}["']`));
    if (expectedProject.link) {
      assert.match(projectsComponent, new RegExp(`link: ["']${expectedProject.link.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}["']`));
    }
  }

  assert.match(projectsComponent, /RIS\/PACS/);
  assert.match(projectsComponent, /Orthanc/);
  assert.match(projectsComponent, /OHIF/);
  assert.match(projectsComponent, /FHIR/);
});
