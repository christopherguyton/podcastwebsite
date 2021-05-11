import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image'


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
    
      <Navbar style={{backgroundColor: '#0D8FB4', paddingBottom: '20px', paddingTop: '20px'}} light expand="lg">
   
        <NavbarBrand href="/">   
         <Image
        src='/images/BannerImage.png'
        alt="AntiOkiLogo"
        width={60}
        height={60}
        >
        </Image>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={{fontFamily: 'Roboto', fontWeight: 'bold'}}className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about" style={{color: '#FFF7E7'}}>About The Show</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/misterbehavior" style={{color: '#FFF7E7'}}>Mister Behavior</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ceelows" style={{color: '#FFF7E7'}}>Ceelows</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    
   
  );

}


export default NavBar;