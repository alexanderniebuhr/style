#!/usr/bin/env zx
console.log(argv)

if (argv.write) {
  await fs.writeFile(
    '.prettierrc.cjs',
    "module.exports = { ...require('@alexanderniebuhr/prettier-config') }"
  )
  if (argv.typescript) {
    await fs.writeFile(
      '.eslintrc.cjs',
      "module.exports = { extends: ['@alexanderniebuhr/eslint-config/typescript'] }"
    )
  } else {
    await fs.writeFile(
      '.eslintrc.js',
      "module.exports = { extends: ['@alexanderniebuhr/eslint-config'] }"
    )
  }
  console.log('Successfully written : ".prettierrc.cjs", ".eslintrc.cjs"')
  console.log('command to format: npx -y prettier@latest --write .prettierrc.cjs .eslintrc.cjs')
} else {
  console.log('just installed deps, add configuration files manually')
}
