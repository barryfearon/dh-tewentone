import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import styles from './Footer.module.scss'

interface IFooterProps {
  siteLogo: string
}

export const Footer: React.FC<IFooterProps> = ({ siteLogo }) => {
  return (
    <div className={`${styles.footer} bg-secondary text-white pt-0`}>
      <Navbar expand='lg' variant='dark' bg='primary' className={`${styles.dhFooterNavBar}`}>
        <Nav className='ml-auto'>
          <Nav.Link href='privacy'>Privacy</Nav.Link>
          <Nav.Link href='terms'>Terms &amp; Conditions</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Footer
