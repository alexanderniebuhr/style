#!/usr/bin/env zx

await fs.writeFile(
  '.prettierrc.js',
  "module.exports = { ...require('@alexanderniebuhr/prettier-config') }"
)
await fs.writeFile(
  '.eslintrc.js',
  "module.exports = { extends: ['@alexanderniebuhr/eslint-config-test/typescript'] }"
)

console.log('Successfully written : ".prettierrc.js", "./.eslintrc.js"')
console.log('command to format: npx prettier@latest --write .prettierrc.js .eslintrc.js')
