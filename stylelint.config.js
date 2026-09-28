export default {
  extends: ['stylelint-config-standard', 'stylelint-config-html/astro'],
  // The 2014 exhibits are preserved as written
  ignoreFiles: ['dist/**', 'dev/**', 'build/**', 'public/**', 'src/exhibits/*/then.css', 'src/exhibits/then-base.css'],
  rules: {
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    // Newer than the linter's feature data
    'selector-type-no-unknown': [true, { ignoreTypes: ['left', 'right'] }],
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'target-current', 'interest-source', 'interest-target'] }],
  },
};
