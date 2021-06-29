import Head from 'next/head'
import React from 'react'
import Container from 'react-bootstrap/Container'

import Footer from './Footer'
import Header from './Header'
import styles from './MainLayout.module.scss'

interface IMainLayoutProps {
  children?: JSX.Element[] | JSX.Element | null
  metaTitle?: string | null
  pageTitle?: string | null
  siteTitle?: string | null
}

export const MainLayout: React.FC<IMainLayoutProps> = ({
  children,
  metaTitle,
  pageTitle,
  siteTitle
}) => {
  return (
    <>
      <Head>
        <title>{metaTitle || `${pageTitle || ''} | ${siteTitle || ''}`}</title>
      </Head>
      <Header siteLogo='https://res.cloudinary.com/dark-horse-music/image/upload/v1508958400/logos/darkhorse-text-white_m4y0vw.svg' />
      <div className={styles.dhIconRight}></div>
      <main className={`${styles.mainContent} bg-secondary text-white`}>
        <div className={`${styles.dhIconLeft}`}>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/v1508958393/logos/darkhorse-artwork-black_jcuefn.svg'
            alt='dh icon left'
          />
        </div>
        <Container fluid={true} className={`${styles.mainContainer}`}>
          {children}
        </Container>
      </main>

      <Footer siteLogo='https://via.placeholder.com/90' />
    </>
  )
}

export default MainLayout
