const path = require('path');

module.exports = {
  plugins: [
    require('postcss-mixins')({
      mixins: require('./src/mixins/index.js')
    }),
    require('postcss-nested')
  ]
}
