module.exports = {
  ...require('@alexanderniebuhr/prettier-config'),
  overrides: [
    {
      files: '*',
      options: { parser: 'unocss' },
    },
  ],
}
