import { execSync } from 'child_process'

process.env.BABEL_ENV = 'development'
process.env.NODE_ENV = 'development'

const shellOptions = {
  stdio: 'inherit',
  shell: process.platform === 'win32'
}

execSync('git config core.ignorecase false')
execSync('webpack serve --config ./build/webpack.dev.conf.js --color', shellOptions)
