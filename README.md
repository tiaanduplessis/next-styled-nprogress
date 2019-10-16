
# next-styled-nprogress
[![package version](https://img.shields.io/npm/v/next-styled-nprogress.svg?style=flat-square)](https://npmjs.org/package/next-styled-nprogress)
[![package downloads](https://img.shields.io/npm/dm/next-styled-nprogress.svg?style=flat-square)](https://npmjs.org/package/next-styled-nprogress)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/next-styled-nprogress.svg?style=flat-square)](https://npmjs.org/package/next-styled-nprogress)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Add NProgress loader between pages in your Next.js App

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). It requires [Next](https://nextjs.org), [React](https://reactjs.org), [nprogress](https://www.npmjs.com/package/nprogress) and [styled-components](https://www.styled-components.com) as peer dependencies,

```sh
$ npm install next-styled-nprogress
$ # OR
$ yarn add next-styled-nprogress
```

## Usage

In `_app.js`:

```js
import PageNProgress from 'next-styled-nprogress'

class Example extends App {
    // ...
    render () {

        return (
        <Container>
            <GlobalStyles />

            <PageNProgress
                color='#F2A83B'
                showSpinner={false}
                height='5px'
                delay={200}
            />

            <Component />
        </Container>
        )
    }
}
```

`NProgress` can also now be used across site, as the styles are already included:

```js
import React from 'react'
import NProgress from  'nprogress'


const Example = () => {

    const handleClick = () => {
        NProgress.start()

        setTimeout(() => {
            NProgress.done()
        }, 1000)
    }

    return <button type="button" onClick={handleClick}>Click me</button>
}
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
