export type Era = 'then' | 'now';

export const demoScope = (era: Era, name: string) => `${era}-${name}`;

// Wraps a demo's stylesheet in @scope so each demo only styles its own markup,
// while the code shown on the page stays exactly as written
export const scopeCss = (css: string, scope: string) =>
  `@scope ([data-demo="${scope}"]) {\n${css}\n}`;
