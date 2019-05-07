# Installing pHTML H Element

[pHTML H Element] runs in all Node environments, with special instructions for:

| [Node](#node) | [CLI](#phtml-cli) | [Eleventy](#eleventy) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- |

## Node

Add [pHTML H Element] to your project:

```bash
npm install @phtmlorg/h-element --save-dev
```

Use [pHTML H Element] to process your HTML:

```js
const phtmlHElement = require('@phtmlorg/h-element')

phtmlHElement.process(YOUR_HTML /*, processOptions, pluginOptions */)
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml')
const phtmlHElement = require('@phtmlorg/h-element')

phtml([
  phtmlHElement(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */)
```

## CLI

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtmlorg/h-element
```

Alternatively, add [pHTML H Element] to your `phtml.config.js` configuration file:

```js
module.exports = {
  plugins: [
    ['@phtmlorg/h-element', /* pluginOptions */]
  ]
}
```

## Eleventy

Add [pHTML Eleventy] and [pHTML H Element] to your Eleventy project:

```sh
npm install @phtmlorg/h-element @phtml/11ty --save-dev
```

Use [pHTML Eleventy] and [pHTML H Element] in your Eleventy configuration:

```js
const phtml11ty = require('@phtml/11ty')
const phtmlHElement = require('@phtmlorg/h-element')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(phtml11ty, {
    use: [
      phtmlHElement(/* pluginOptions */)
    ]
  })
}
```

## Gulp

Add [Gulp pHTML] and [pHTML H Element] to your project:

```bash
npm install @phtmlorg/h-element gulp-phtml --save-dev
```

Use [Gulp pHTML] and [pHTML H Element] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')
const phtmlHElement = require('@phtmlorg/h-element')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      plugins: [
        phtmlHElement(/* pluginOptions */)
      ]
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Grunt

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

Use [Grunt pHTML] and [pHTML H Element] in your Gruntfile:

```js
const phtmlHElement = require('@phtmlorg/h-element')

grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      plugins: [
        phtmlHElement(/* pluginOptions */)
      ]
    },
    dist: {
      files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }]
    }
  }
})
```

[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML Eleventy]: https://github.com/phtmlorg/phtml-11ty
[pHTML H Element]: https://github.com/phtmlorg/phtml-h-element
