# Da Vinci CSS

![]()

![Release v0.1.0](https://img.shields.io/badge/release-v0.1.0-f775ff.svg)

> Creating shapes and drawings with CSS easier ways possible.

## Summary
- [Why?](#why?)
- [How to install?](#how-to-install?)
- [Usage](#usage)
  - [Basic shapes](#basic-shapes)
    - [rectangle](#rectangle)
    - [circle](#circle)
    - [oval](#oval)
    - [triangle](#triangle)
    - [polygon](#polygon)
  - [Special shapes](#special-shapes)
    - [heart](#heart)
  - [position](#position)
  - [flip](#flip)
  - [clone](#clone)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [History](#history)
- [License](#license)

## Why?

Because it's fun.

## How to install?

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
  rect(100, 200, #eb02dd) /* width, height, color */
```

#### circle

```css
.elemento
  circ(50, #eb02dd) /* radius, color */
```

#### oval

```css
.elemento
  oval(50, 100, #eb02dd) /* width, height, color */
```

#### triangle

```css
.elemento
  tri(50, 50, 50, #eb02dd) /* */
```

#### polygon

```css
.elemento
  poly() /* */
```

### Special shapes

```css
.elemento
  heart() /* */
```

### More features

#### position

```css
.elemento
  position(10, 10, 1) /* x, y, layer */
```

#### flip

```css
.elemento
  flip(vertical) /* vertical or horizontal */
```

#### clone

```css
.elemento
  clone(50, 50, #ccc) /* */
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
