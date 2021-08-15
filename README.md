# Output-Text-Formatter [![npm version](https://badge.fury.io/js/output-text-formatter.svg)](https://www.npmjs.com/package/output-text-formatter )

Output-Text-Formatter - Library for formatting console output to match n(default: 80) character output, it can center text, add padding and so on...

[![NPM](https://nodei.co/npm/output-text-formatter.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.org/output-text-formatter )

I found out that I'm reusing this part of the code, thus a new NPM package was born, maybe it will be usefull to someone else.

## Installation

### npm
```bash
$ npm i output-text-formatter --save
```

### yarn
```bash
$ yarn add output-text-formatter
```

## Example

````javascript
const textFormatter = require('output-text-formatter');
const { centerText, splitter } = textFormatter;
````

````javascript
const {
  centerText,
  splitter,
} = textFormatter;

// Split and center log text...
console.log(centerText(splitter(`Something... bla bla\n\n, Heh Nice!`)));

// You can use chalk or colors to make it even more fun
const colors = require('colors');
console.log(centerText(splitter(`Something... bla bla\n\n, Heh Nice!`)).bgYellow.black);

````

- See `./examples` for more examples.


## Todo

- [ ] Add more examples
  - [ ] On how to use centerText
  - [ ] On how to use splitter
  - [ ] On how to use alignLeftText
  - [ ] On how to use alignRightText

## Thanks

+ [Gordan Nekić](https://github.com/gnekich)

## Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3


## MIT license
Copyright (c) 2019 Gordan Nekić

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.