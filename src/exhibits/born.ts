import type { BornMeta } from './types';

// Display order; an entry appears once its three files exist
export const bornNames = [
  'select',
  'switch',
  'forms',
  'tree',
  'drawer',
  'header',
  'toc',
  'progress',
  'radial',
  'gallery',
] as const;

export type BornExhibit = {
  name: (typeof bornNames)[number];
  html: string;
  css: string;
  meta: BornMeta;
};

// Only repo files feed the demos rendered with set:html; never point this at external content
const raw = import.meta.glob<string>(['./born/*/demo.html', './born/*/demo.css'], {
  query: '?raw',
  import: 'default',
  eager: true,
});
const metas = import.meta.glob<BornMeta>('./born/*/demo.json', { import: 'default', eager: true });

export const bornExhibits: BornExhibit[] = bornNames.flatMap((name) => {
  const html = raw[`./born/${name}/demo.html`];
  const css = raw[`./born/${name}/demo.css`];
  const meta = metas[`./born/${name}/demo.json`];
  return html !== undefined && css !== undefined && meta !== undefined ? [{ name, html, css, meta }] : [];
});
