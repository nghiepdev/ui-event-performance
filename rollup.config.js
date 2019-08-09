const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

module.exports = {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    name: 'ui-event-performance',
  },
  plugins: [resolve(), commonjs()],
};
