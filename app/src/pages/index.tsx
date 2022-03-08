import { NextPage } from 'next'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import MainLayout from '../components/MainLayout/MainLayout'
import styles from './index.module.scss'

const Home: NextPage = () => (
  <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='Home'>
    <div className={styles.backgroundImage}>
      <img src='https://res.cloudinary.com/dark-horse-music/image/upload/v1645473638/background%20images/wonderland-bg.jpg' />
    </div>
    <div className={`${styles.dhHomepageContent} d-flex flex-column justify-content-between`}>
      <Row className='justify-content-center'>
        <Col className='col-sm-10 col-lg-8 pt-3 pt-lg-5 d-flex align-items-center align-items-lg-start flex-column'>
          <div className='dhLogo'>
            <img
              src='https://res.cloudinary.com/dark-horse-music/image/upload/v1645472154/logos/logo-twenty-two.svg'
              width='447'
              height='373'
              className='img-fluid'
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1 className='text-center mb-2 display-3 text-shadow'>Dark Horse 2022</h1>
          <h2 className='text-center mb-4 mb-lg-0 text-shadow'>July 22nd, 23rd &amp; 24th</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='d-flex flex-column flex-lg-row justify-content-around mb-5 mb-lg-0'>
            <div className='d-flex justify-content-center my-2'>
              <a
                href='https://www.tickettailor.com/events/darkhorsemusic/606301/'
                title='Buy tickets for Dark Horse Music'
                className='btn btn-lg text-white btn-danger'
                style={{ width: '200px' }}
              >
                Buy Festival Tickets
              </a>
            </div>
            <div className='d-flex justify-content-center my-2'>
              <Link href='/lineup'>
                <a
                  title='DarkHorse 2022 Lineup'
                  className='btn btn-lg text-white btn-info'
                  style={{ width: '200px' }}
                >
                  Lineup
                </a>
              </Link>
            </div>
            <div className='d-flex justify-content-center my-2'>
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
            <div className='d-flex justify-content-center my-2'>
              <Link href='/festival-facts'>
                <a className='btn btn-lg btn-success' style={{ width: '200px' }}>
                  Festival Facts
                </a>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className={`${styles.wonderlandText} d-flex justify-content-center`}>
            <img
              src='https://res.cloudinary.com/dark-horse-music/image/upload/v1645472203/logos/wonderland-text.png'
              width='959'
              height='294'
              className='img-fluid'
            />
          </div>
        </Col>
      </Row>
    </div>
  </MainLayout>
)

export default Home
