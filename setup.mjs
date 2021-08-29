#!/usr/bin/env zx
console.log(argv)

if (argv.write) {
  await fs.writeFile(
    '.prettierrc.js',
    "module.exports = { ...require('@alexanderniebuhr/prettier-config') }"
  )
  if (argv.typescript) {
    await fs.writeFile(
      '.eslintrc.js',
      "module.exports = { extends: ['@alexanderniebuhr/eslint-config/typescript'] }"
    )
  } else {
    await fs.writeFile(
      '.eslintrc.js',
      "module.exports = { extends: ['@alexanderniebuhr/eslint-config'] }"
    )
  }
  console.log('Successfully written : ".prettierrc.js", "./.eslintrc.js"')
  console.log('command to format: npx prettier@latest --write .prettierrc.js .eslintrc.js')
} else {
  console.log('just installed deps, add configuration files manually')
}
