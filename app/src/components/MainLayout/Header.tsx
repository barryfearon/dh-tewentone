import React from 'react'
import Link from 'next/link'
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
            <Link href='/'>
              <a className={styles.dhNavLink}>Home</a>
            </Link>
            <Link href='tickets'>
              <a className={styles.dhNavLink}>Tickets</a>
            </Link>
            <Link href='about'>
              <a className={styles.dhNavLink}>About Us</a>
            </Link>
            <Link href='green-site'>
              <a className={styles.dhNavLink}>Green Site Info</a>
            </Link>
            <Link href='contact-us'>
              <a className={styles.dhNavLink}>Contact Us</a>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
