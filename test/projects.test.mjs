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
});

test('keeps the established inline project list structure', () => {
  assert.match(projectsComponent, /const projects = \[/);

  for (const expectedProject of expectedProjects) {
    assert.match(projectsComponent, new RegExp(`title: ["']${expectedProject.title}["']`));
    assert.match(projectsComponent, new RegExp(`link: ["']${expectedProject.link.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}["']`));
  }
});
