import React from 'react'
import App, { Container } from 'next/app'
import Centre from '../components/skeleton/Container';
import Navbar from '../components/navbar';
import Head from 'next/head'
import Footer from '../components/footer'
import '../css/content.css'

class tech extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render (props) {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="shortcut icon" href="/static/images/handv2.png"/>
          <style>{`
            :root {box-sizing: border-box}
            *, *::before, *::after {box-sizing: inherit}
            html, body {
              width: 100%;
              height: 100%;
              maring: 0;  
            }
            .header {
              padding: 12px;
              padding-bottom: 0;
              margin: 0;
            }
            main {
              padding: 0px;
              margin: 0;
            }
            main > .container, main > article > .container {
              padding: 12px
            }
            /*@media all and (min-width: 1000px) {
              .header {
                padding: 25px;
                padding-bottom: 0;
              }
              main {
                padding: 25px;
              }
            } */

          `}</style>
        </Head>
          <Centre>
            <h2 className={'header' + (this.props.router.pathname == "/" ? " home" : "")}>
              At The Café - George Fischer
            </h2>
          </Centre>
        <Navbar  self={this.props.router.pathname}/>
        <main>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </Container>
    )
  }
}

export default tech;