let mix = require('laravel-mix');

mix
.setResourceRoot('../')
.setPublicPath('dist')
.sourceMaps()

if(mix.inProduction()) {
  mix.js(
    'src/dimentions.js',
    'js/dimentions.min.js'
  )
} else {
  mix.js(
    'src/dimentions.js',
    'js/dimentions.js'
  )
}
