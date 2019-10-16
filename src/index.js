import React, { Component } from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import { createGlobalStyle } from 'styled-components'

class PageNProgress extends Component {
  constructor (props) {
    super(props)

    const { color, height } = this.props

    // NOTE: Extracted from https://github.com/rstacruz/nprogress/blob/master/nprogress.css
    this.NProgressStyles = createGlobalStyle`
        /* Make clicks pass-through */
        #nprogress {
        pointer-events: none;
        }

        #nprogress .bar {
        background: ${color};
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: ${height};
        }

        /* Fancy blur effect */
        #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${color}, 0 0 5px ${color};
        opacity: 1.0;
        transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
        }

        #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${color};
        border-left-color: ${color};
        border-radius: 50%;
        animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
        position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
        0%   { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes nprogress-spinner {
        0%   { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
        }
    `
  }

  static defaultProps = {
    height: '2px',
    color: '#29d',
    delay: 0
  }

  componentDidMount () {
    const {
      delay,
      easing,
      speed,
      minimum,
      trickle,
      trickleSpeed,
      showSpinner
    } = this.props

    NProgress.configure({
      easing,
      speed,
      minimum,
      trickle,
      trickleSpeed,
      showSpinner
    })

    Router.events.on('routeChangeStart', () => {
      this.timeout = setTimeout(() => NProgress.start(), delay)
    })
    Router.events.on('routeChangeComplete', () => {
      clearTimeout(this.timeout)
      NProgress.done()
    })
    Router.events.on('routeChangeError', () => {
      clearTimeout(this.timeout)
      NProgress.done()
    })
  }

  shouldComponentUpdate = () => false

  inc = val => NProgress.inc(val)

  done = val => NProgress.done(val)

  render () {
    return <this.NProgressStyles />
  }
}

export { default as NProgress } from 'nprogress'
export default PageNProgress
