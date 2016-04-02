![aurea](aurea.jpg)

# Da Vinci CSS

![Release v0.1.0](https://img.shields.io/badge/release-v0.1.0-f775ff.svg)

> Creating shapes and drawings with CSS.

## Summary
- [Why?](#why)
- [How to install?](#how-to-install)
- [Usage](#usage)
  - [Basic shapes](#basic-shapes)
    - [rectangle](#rectangle)
    - [circle](#circle)
    - [oval](#oval)
    - [triangle](#triangle)
  - [position](#position)
  - [flip](#flip)
  - [clone](#clone)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [History](#history)
- [License](#license)

## <a name="why"></a> Why?

Because it's fun.

## <a name="how-to-install"></a> How to install?

> **Note:** To use the framework, you'll need to compile your style with the Stylus preprocessor using NodeJS, for more information see [NodeJS](https://nodejs.org/en/) and [Stylus](http://stylus-lang.com/).

**Import** the library.

```
@import "da-vinci"
```

**Done** ;)

## Usage

### Basic shapes

#### rectangle


```css
.elemento
  rect(100px, 200px, #eb02dd) /* width, height, color (default #eb02dd) */
```

#### circle

```css
.elemento
  circ(50px, #eb02dd) /* radius, color (default = #eb02dd) */
```

#### oval

```css
.elemento
  oval(50px, 100px, #eb02dd) /* width, height, color (default = #eb02dd) */
```

#### triangle

```css
.elemento
  tri(50px, 50px, 50px, #eb02dd) /*top, right, left (default = #eb02dd) */
```

### Other features

#### position

```css
.elemento
  position(10px, 10px, 1) /* x, y, layer(default = 1) */
```

#### flip

```css
.elemento
  flip(vertical) /* vertical or horizontal (default = horizontal) */
```

#### clone

```css
.elemento
  clone(50px, 50px, #ccc) /* x, y, color (default = #eb02dd) */
```

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing
Find on our [roadmap](https://github.com/afonsopacifer/da-vinci-css/issues/1) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/da-vinci-css/blob/master/CONTRIBUTING.md).

## History
See [Releases](https://github.com/afonsopacifer/da-vinci-css/releases) for detailed changelog.

## License
[MIT License](https://github.com/afonsopacifer/da-vinci-css/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.com/)
