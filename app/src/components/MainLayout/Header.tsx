import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

import styles from './Header.module.scss'

interface IHeaderProps {
  siteLogo: string
}

export const Header: React.FC<IHeaderProps> = ({ siteLogo }) => {
  return (
    <div>
      <Navbar expand='lg' variant='dark' bg='primary' className={styles.dhNavBar}>
        <Navbar.Brand href='/'>
          <img data-src={siteLogo} loading='lazy' height='50' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='tickets'>Tickets</Nav.Link>
            <Nav.Link href='about'>About Us</Nav.Link>
            <Nav.Link href='green-site'>Green Site Info</Nav.Link>
            <Nav.Link href='contact-us'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
