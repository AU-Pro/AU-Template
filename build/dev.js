const { execSync } = require('child_process')

const chalk = require('chalk')

console.log(chalk.magenta('\n .... \n'))

const shellOptions = {
  stdio: 'inherit',
  shell: process.platform === 'win32'
}

execSync('git config core.ignorecase false')
execSync('webpack serve --config ./build/webpack.dev.conf.js  --color', shellOptions)
