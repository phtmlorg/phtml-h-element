# pHTML H Element [<img src="https://phtml.io/logo.svg" alt="pHTML" width="90" height="90" align="right">][phtml]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML H Element] lets you use contextual headings in HTML.

```html
<h>Heading</h>
<p>...</p>
<article>
  <h>Heading</h>
  <p>...</p>
  <section>
    <h>X Heading</h>
    <p>...</p>
  </section>
</article>
<article>
  <p>...</p>
  <h>Heading</h>
  <p>...</p>
</article>

<!-- becomes -->

<h role="heading" aria-level="1">Heading</h>
<p>...</p>
<article>
  <h role="heading" aria-level="2">Heading</h>
  <p>...</p>
  <section>
    <h role="heading" aria-level="3">X Heading</h>
    <p>...</p>
  </section>
</article>
<article>
  <p>...</p>
  <h role="heading" aria-level="2">Heading</h>
  <p>...</p>
</article>
```

## Usage

Transform HTML files directly from the command line:

```bash
npx phtml source.html output.html -p @phtml/h-element
```

### Node

Add [pHTML H Element] to your project:

```bash
npm install @phtml/h-element --save-dev
```

Use [pHTML H Element] to process your HTML:

```js
const phtmlHElement = require('@phtml/h-element');

phtmlHElement.process(YOUR_HTML /*, processOptions, pluginOptions */);
```

Or use it as a [pHTML] plugin:

```js
const phtml = require('phtml');
const phtmlHElement = require('@phtml/h-element');

phtml([
  phtmlHElement(/* pluginOptions */)
]).process(YOUR_HTML /*, processOptions */);
```

[pHTML H Element] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [CLI](INSTALL.md#phtml-cli) | [Eleventy](INSTALL.md#eleventy) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- |

## Options

### heading

The `name` option defines the element name transformed into a contextual heading.

```js
phtmlHElement({ heading: 'h1' });
```

```html
<h1>Heading</h1>
<p>...</p>
<article>
  <h1>Heading</h1>
  <p>...</p>
  <section>
    <h1>X Heading</h1>
    <p>...</p>
  </section>
</article>
<article>
  <p>...</p>
  <h1>Heading</h1>
  <p>...</p>
</article>

<!-- becomes -->

<h1 role="heading" aria-level="1">Heading</h1>
<p>...</p>
<article>
  <h1 role="heading" aria-level="2">Heading</h1>
  <p>...</p>
  <section>
    <h1 role="heading" aria-level="3">X Heading</h1>
    <p>...</p>
  </section>
</article>
<article>
  <p>...</p>
  <h1 role="heading" aria-level="2">Heading</h1>
  <p>...</p>
</article>
```

### headingLevel

The `headingLevel` option determines whether heading elements should be used
and from which level they should begin. By default, they are disabled.

```js
phtmlHElement({ headingLevel: 2, ariaLevel: false });
```

```html
<!-- becomes -->

<h2>Heading</h2>
<p>...</p>
<article>
  <h3>Heading</h3>
  <p>...</p>
  <section>
    <h4>X Heading</h4>
    <p>...</p>
  </section>
</article>
<article>
  <p>...</p>
  <h3>Heading</h3>
  <p>...</p>
</article>
```

### ariaLevel

The `ariaLevel` option determines whether the `heading` role and `aria-level`
attributes should be used and from which level they should begin. By default,
they are set to `1`.

```js
phtmlHElement({ headingLevel: false, ariaLevel: 2 });
```

```html
<!-- becomes -->

<h role="heading" aria-level="2">Heading</h>
<p>...</p>
<section>
  <h role="heading" aria-level="3">Heading</h>
  <p>...</p>
  <section>
    <h role="heading" aria-level="4">X Heading</h>
    <p>...</p>
  </section>
</section>
<section>
  <p>...</p>
  <h role="heading" aria-level="3">Heading</h>
  <p>...</p>
</section>
```

### sections

The `sections` option determines the element names of sectioning tags used to
calculate the hierarchical level of heading tags. The default sectioning tags
are `article`, `aside`, `nav`, and `section`.

```js
phtmlHElement({
  sections: [ 'article', 'aside', 'nav' ]
});
```

```html
<!-- becomes -->

<h role="heading" aria-level="1">Heading</h>
<p>...</p>
<article>
  <h role="heading" aria-level="2">Heading</h>
  <p>...</p>
  <section>
    <h role="heading" aria-level="2">X Heading</h>
    <p>...</p>
  </section>
</article>
<article>
  <p>...</p>
  <h role="heading" aria-level="2">Heading</h>
  <p>...</p>
</article>
```

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-h-element.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-h-element
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/@phtml/h-element.svg
[npm-url]: https://www.npmjs.com/package/@phtml/h-element

[pHTML]: https://github.com/phtmlorg/phtml
[pHTML H Element]: https://github.com/phtmlorg/phtml-h-element
