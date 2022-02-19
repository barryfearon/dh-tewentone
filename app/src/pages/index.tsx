import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Row, Col, CardDeck, Card } from 'react-bootstrap'

import MainLayout from '../components/MainLayout/MainLayout'
import styles from './index.module.scss'

const Home: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Home'>
    <div className={styles.backgroundImage}>
      <Image src='/images/wonderland-bg.jpg' width={2160} height={1080} />
    </div>
    <Row className={`${styles.hpContent} justify-content-center`}>
      <Col className='col-sm-10 col-lg-8 pt-5 d-flex justify-content-center flex-column'>
        <div>
          <div className='dhLogo'>
            <Image src='/images/logo-twenty-two.svg' width={447} height={373} />
          </div>
          <div className='mb-5'>
            <h1 className='text-center mb-4 display-3 text-shadow'>Dark Horse 2022</h1>
            <h2 className='text-center mb-5 text-shadow'>July 22nd, 23rd &amp; 24th</h2>
            <div className='d-flex justify-content-center mb-3 mb-lg-4'>
              <a
                href='https://www.tickettailor.com/events/darkhorsemusic/606301/'
                title='Buy tickets for Dark Horse Music'
                className='btn btn-lg text-white btn-danger'
                style={{ width: '200px' }}
              >
                Buy Festival Tickets
              </a>
            </div>
            <div className='d-flex justify-content-center mb-3 mb-lg-4'>
              <a
                href='https://www.isleofmancamping.co.uk/acatalog/Isle-of-Man-Dark-Horse-Music-Festival.html'
                title='Buy glamping packages'
                className='btn btn-lg text-white btn-warning'
                rel='noopener nofollow'
                target='_blank'
                style={{ width: '200px' }}
              >
                Glamping Packages
              </a>
            </div>
            <div className='d-flex justify-content-center'>
              <Link href='/festival-facts'>
                <a className='btn btn-lg btn-success' style={{ width: '200px' }}>
                  Festival Facts
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className='wonderlandText d-flex justify-content-center'>
          <Image src='/images/wonderland-text.png' width={482} height={148} />
        </div>
      </Col>
    </Row>
  </MainLayout>
)

export default Home
