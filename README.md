![aurea](img/aurea.jpg)

# Da Vinci CSS

![Release v0.2.0](https://img.shields.io/badge/release-v0.2.0-f775ff.svg)

> Creating shapes and drawings with CSS. View a [Demo](http://afonsopacifer.github.io/da-vinci-css/).

## Summary
- [Why?](#why)
- [How to install?](#how-to-install)
- [Usage](#usage)
  - [Basic shapes](#basic-shapes)
    - [rectangle](#rectangle)
    - [circle](#circle)
    - [oval](#oval)
    - [triangle](#triangle)
  - [Pixel Art](#pixel-art)
    - [pixels](#pixels)
    - [grid](#grid)
    - [demo](#demo)
  - [Edit](#edit)
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
.element
  rect(100px, 50px, #eb02dd) /* width, height, color (default #eb02dd) */
```

![rectangle](img/rect.jpg)

#### circle

```css
.element
  circ(50px, #eb02dd) /* radius, color (default = #eb02dd) */
```

![circle](img/circle.jpg)

#### oval

```css
.element
  oval(100px, 50px, #eb02dd) /* width, height, color (default = #eb02dd) */
```

![oval](img/oval.jpg)

#### triangle

```css
.element
  tri(100px, 50px, 50px, #eb02dd) /* top, right, left (default = #eb02dd) */
```

![triangle](img/triangle.jpg)

### Edit

#### position

```css
.element
  rect(100px, 50px, #eb02dd)
  pos(10px, 10px, 1) /* x, y, layer(default = 1) */
```

![position](img/position.jpg)

#### flip (vertical)

```css
.element
  flip(vertical) /* vertical or horizontal (default = horizontal) */
```

![vertical](img/vertical.gif)

#### flip (horizontal)

```css
.element
  flip(horizontal) /* vertical or horizontal (default = horizontal) */
```

![horizontal](img/horizontal.gif)

#### clone

```css
.element
  rect(100px, 100px, #eb02dd)
  clone(110px, 0, #ccc) /* x, y, color (default = #eb02dd) */
```

![clone](img/clone.jpg)

### Pixel art

#### pixels

```css
.art {
  rect(10px, 10px) /* first pixel on position 1 1 */
  box-shadow: pixel(2, 2, 10px, #000); /* row, col, displacement, color (default = #000) */
}
```

![pixels](img/pixels.jpg)

> **Tip:** Create variables and use p( ) > pixel( ).

```css
.art {
  a = 10px
  rect(a, a)
  box-shadow: p(2, 2, a);
}
```

> **Tip:** Create multiples pixels.

```css
.art {
  a = 10px
  rect(a, a)
  box-shadow:
    p(2, 2, a),
    p(3, 3, a),
    p(4, 4, a);
}
```

![multiple-pixels](img/multiple-pixels.jpg)

#### grid

```css
.canvas {
  grid(10px, 4, #000) /* cell size, grid size (default = 4), stroke color (default = #000) */
}
```

![grid](img/grid.jpg)

#### demo

![Plankton](img/plankton.jpg)

[View demo](https://github.com/afonsopacifer/da-vinci-css)

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
