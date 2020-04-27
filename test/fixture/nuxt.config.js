// eslint-disable-next-line
const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  buildDir: resolve(__dirname, '.nuxt'),
  srcDir: __dirname,
  render: {
    resourceHints: false,
  },
  plugins: [require.resolve('./plugins/composition-api')],
  build: {
    babel: {
      presets: [
        [
          '@nuxt/babel-preset-app',
          {
            corejs: {
              version: 3,
            },
          },
        ],
      ],
    },
  },
}
