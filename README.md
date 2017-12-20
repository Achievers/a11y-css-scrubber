a11y-css-scrubber
=========
This module allows you to create an iteration of the css on your site into a high contrast version of itself, making it more accessible. a11y-css-scrubber does not change or replace any existing CSS, but acts as an overlay CSS on your existing CSS.


## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). To get started, [download and install Node.js](https://nodejs.org/en/download/).

Install a11y-css-scrubber using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```
$ npm install a11y-css-scrubber
```

## Why a11y-css-scrubber?

This module improves site accessibility by allowing you to change the following:

 * all background color changes to white (redefinable)
 * all text & border colors changes to black (redefinable)
 * access to the Dyslexie font, a font designed to improve readibility for dyslexics


### Parameters

```json
{
  "options": {
    "content": "",
    "backgrounds": "",
    "singleFile": "",
    "clearDest": "",
    "fontsBase64": ""
  },
  "src": "",
  "dest": ""
}

```

#####Required

key              | Type   | Default | description                                                              |
------------------|--------|---------|--------------------------------------------------------------------------|
 `src`            | string | blank    | Source directory: the path where the currently processed CSS file resides            |
 `dest`           | string | blank    | Destination directory: the path of the target directory where the CSS file is copied to              |

#####Options (Object)

 key              | Type    | Default | description                                                              |
------------------|---------|---------|--------------------------------------------------------------------------|
 `content`        | string  | #000000 | All boarders and text |
 `backgrounds`    | string  | #ffffff | All background colors |
 `singleFile`     | string  | undefined     | All files are processed into one, single file |
 `clearDest`      | boolean | true   | If you are not using singleFile, it is recommended that you clear the destination directory |
 `fontsBase64`      | boolean | false   | Use Base64 encode fonts or standard font files |

## OpenDyslexic
When your a11y high contrast css is enabled you will also have access to the OpenDyslexic font. Though OpenDyslexic is not automatically enabled, a possible method to activate the font is:

```javascript
  var node = document.createElement('style');
  node.innerHTML = '*:not(.icon){font-family: opendyslexicregular !important;}';
  document.body.appendChild(node);

```

## Helper css
Helper css styles are also created to assist in the high contrast styling of your site. The classes listed below are be generated in the default or optionally defined colors.

```css
.a11yCssScrubber-content
.a11yCssScrubber-backgrounds

.a11yCssScrubber-link--content:link
.a11yCssScrubber-active--content:active
.a11yCssScrubber-hover--content:hover

.a11yCssScrubber-link--backgrounds:link
.a11yCssScrubber-active--backgrounds:active
.a11yCssScrubber-hover--backgrounds:hover

.a11yCssScrubber-link-background--content:link
.a11yCssScrubber-active-background--content:active
.a11yCssScrubber-hover-background--content:hover

.a11yCssScrubber-link-background--backgrounds:link
.a11yCssScrubber-active-background--backgrounds:active
.a11yCssScrubber-hover-background--backgrounds:hover

.a11yCssScrubber-border--content
.a11yCssScrubber-border-top--content
.a11yCssScrubber-border-bottom--content
.a11yCssScrubber-border-left--content
.a11yCssScrubber-border-right--content

.a11yCssScrubber-border--backgrounds
.a11yCssScrubber-border-top--backgrounds
.a11yCssScrubber-border-bottom--backgrounds
.a11yCssScrubber-border-left--backgrounds
.a11yCssScrubber-border-right--backgrounds

.a11yCssScrubber-background--content
.a11yCssScrubber-background--backgrounds

.a11yCssScrubber-underline--content
.a11yCssScrubber-background--backgrounds

```

## Tests

  To run the test suite, first install the dependencies, then run `npm run test`:

```
$ npm install
$ npm test
```
