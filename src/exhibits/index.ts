import type { NowMeta, ThenMeta } from './types';

export const exhibitNames = ['carousel', 'collapse', 'dropdown', 'modal', 'tab', 'tooltip'] as const;

export type ExhibitName = (typeof exhibitNames)[number];

type Demo = { html: string; css: string };

export type Exhibit = {
  name: ExhibitName;
  then: Demo & { meta: ThenMeta };
  now: Demo & { meta: NowMeta };
};

// Only repo files feed the demos rendered with set:html; never point this at external content
const raw = import.meta.glob<string>(['./*/*.html', './*/*.css', './*-base.css'], {
  query: '?raw',
  import: 'default',
  eager: true,
});
const metas = import.meta.glob<ThenMeta | NowMeta>('./*/*.json', { import: 'default', eager: true });

const read = (path: string) => {
  const file = raw[path];
  if (file === undefined) throw new Error(`Missing exhibit file: ${path}`);
  return file;
};

const readMeta = <T extends ThenMeta | NowMeta>(path: string) => {
  const meta = metas[path];
  if (meta === undefined) throw new Error(`Missing exhibit file: ${path}`);
  return meta as T;
};

// Shared styles each era's demos need, prepended inside every scoped stylesheet
export const baseCss = {
  then: read('./then-base.css'),
  now: read('./now-base.css'),
};

export const exhibits: Exhibit[] = exhibitNames.map((name) => ({
  name,
  then: {
    html: read(`./${name}/then.html`),
    css: read(`./${name}/then.css`),
    meta: readMeta<ThenMeta>(`./${name}/then.json`),
  },
  now: {
    html: read(`./${name}/now.html`),
    css: read(`./${name}/now.css`),
    meta: readMeta<NowMeta>(`./${name}/now.json`),
  },
}));
