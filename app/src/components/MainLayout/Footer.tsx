import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import styles from './Footer.module.scss'

interface IFooterProps {
  siteLogo: string
}

export const Footer: React.FC<IFooterProps> = ({ siteLogo }) => {
  return (
    <div className={`${styles.footer} bg-secondary text-white pt-0`}>
      <Navbar expand='lg' variant='dark' bg='primary' className={`${styles.dhFooterNavBar} px-5`}>
        <a href='https://www.biosphere.im/' target='blank' rel='nofollow noopener' className='mr-5'>
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/c_scale,w_100,q_100/v1626324808/logos/Proud_to_Partner.png'
            alt='Biosphere Isle of Man'
            width='100'
            height='100'
          />
        </a>
        <a
          href='https://www.iomarts.com/'
          target='blank'
          rel='nofollow noopener'
          className='mr-auto'
        >
          <img
            src='https://res.cloudinary.com/dark-horse-music/image/upload/c_scale,h_100,q_100/v1510039293/logos/iom-arts-council-logo_y6ktyb.png'
            alt='Isle of Man Arts Council'
            width='272'
            height='100'
          />
        </a>
        <Nav className=''>
          <Nav.Link href='privacy'>Privacy</Nav.Link>
          <Nav.Link href='terms'>Terms &amp; Conditions</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Footer
