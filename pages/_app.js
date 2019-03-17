import React from 'react'
import App, { Container } from 'next/app'
import Centre from '../components/skeleton/Container';
import Navbar from '../components/navbar';
import Head from 'next/head'

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
        </Head>
          <Centre>
            <h2 style={{
              padding: "25px",
              paddingBottom: 0,
              margin: 0
            }}>
              At The Café - George Fischer
            </h2>
          </Centre>
        <Navbar  self={this.props.router.pathname}/>
        <Centre>
          <main style={{
            padding: "25px"
          }}>
            <Component {...pageProps} />
          </main>
        </Centre>
      </Container>
    )
  }
}

export default tech;