# files-guru

#### version 1.0.3
Possible badges include:
- npm version: `[![NPM Version][npm-image]][npm-url]`
- npm downloads: `[![NPM Downloads][downloads-image]][downloads-url]`
- Build status: `[![Build Status][travis-image]][travis-url]`
- Test coverage: `[![Test Coverage][coveralls-image]][coveralls-url]`
- Tips: `[![Gratipay][gratipay-image]][gratipay-url]`
**files-guru** is a lightweight and efficient file management tool for Node.js applications, designed to simplify operations such as moving, renaming, and manipulating files.

## Features

- Lightweight and fast
- Suitable for various file operations

## Installation

Install the package using npm:

```bash
npm install files-guru
```
## How to Use

```js
import filesGuru from "files-guru";

// first funtion to rename all the files in a directory according to the given name by default it will rename all files with name as File [filenumber].[extension]

filesGuru.renameAllFiles("here should be the path to that directory","here should be the neName");
```
