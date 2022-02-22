import { NextPage } from 'next'
import Link from 'next/link'
import { Row, Col } from 'react-bootstrap'

import MainLayout from '../components/MainLayout/MainLayout'
import { Main } from 'next/document'

const FourOhFour: NextPage = () => (
  <>
    <MainLayout siteTitle='Dark Horse Music - Isle of Man' pageTitle='404'>
      <Row className='justify-content-center vh-100'>
        <Col className='col-sm-10 col-lg-8 pt-5 d-flex'>
          <div className='d-flex justify-content-between flex-column'>
            <div className='dhLogo'>
              <img
                src='https://res.cloudinary.com/dark-horse-music/image/upload/v1645472154/logos/logo-twenty-two.svg'
                width='447'
                height='373'
                className='img-fluid'
              />
            </div>
            <div className='backBtn'>
              <Link href='/'>
                <a className='btn btn-outline-danger text-white'>Home Page</a>
              </Link>
            </div>
            <div className='dh-content h-100 d-flex flex-column justify-content-center align-items-center'>
              <h1 className='text-center mb-4 display-3'>Dark Horse 2022</h1>
              <h2 className='mb-4 display-4'>404 Error</h2>
              <h3 className='text-center'>
                Looks like you have entered the wrong address, please click the home button above to
                return to the home page
              </h3>
            </div>
          </div>
        </Col>
      </Row>
    </MainLayout>
  </>
)
export default FourOhFour
