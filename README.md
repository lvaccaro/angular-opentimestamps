# bower-opentimestamps

Javascript OpenTimestamps library for web frontend.
This repository could be used to build easily the javascript-library on client-side with ES5 compatibility.
You can import the compiled library as single file only, or use bower package manager.

Official Javascript OpenTimestamps library at: https://github.com/opentimestamps/javascript-opentimestamps

## Import in Html
Import the library in your html code.
```html
<script src="/bower-opentimestamps.js"></script>
```

## Import in Bower
Import the library in your project.
```shell
bower install bower-opentimestamps
```
Include the script file in your html.
```html
<script src="./bower_components/bower-opentimestamps/bower-opentimestamps.js"></script>
```


## Compatibility

> The lib is compatible with ECMAScript6(ES6) and ECMAScript5(ES5).

Browser compatibility:

* [__Chrome__](https://www.google.com/chrome/browser/desktop/index.html) version >= 40
* [__Chromium__](https://www.chromium.org/getting-involved/download-chromium) version >= 40
* [__Firefox__](https://www.mozilla.org/en-US/firefox/new/) version >= 40
* [__Internet Explorer__](https://www.microsoft.com/en-us/download/internet-explorer.aspx) version >= 9
* [__Safari__](https://support.apple.com/downloads/safari) version >= 8


## Usage
Follow the tutorial on javascript-opentimestamps repo: https://github.com/opentimestamps/javascript-opentimestamps#from-code


## Build Library
Resolve and install dependencies.
```
npm install --dev
```
Build javascript and cross-compile from ES6 to ES5.
```
gulp default
```
