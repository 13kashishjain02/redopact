import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header3 = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" style={{backgroundColor:"#2C3540"}} >
        <NavbarToggler onClick={toggle} style={{color:"white"}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar style={{padding:"0px 0% 0% 8%"}}>
          <NavItem className="headdrop1">
              <NavLink href="/" style={{color:"#fff"}}>SALE</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar >
                
              <DropdownToggle className="headdrop" nav caret>
                Fashion and Accessories 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
                
              <DropdownToggle className="headdrop" nav caret>
                Home & Kitchen
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
                
              <DropdownToggle className="headdrop" nav caret>
                Kids, Toys & Babies
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
                
              <DropdownToggle className="headdrop" nav caret>
                Events
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar >
                
              <DropdownToggle className="headdrop" nav caret>
                Dummy
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
  
            <NavItem className="headdrop1">
              <NavLink href="/" style={{color:"#fff"}}>More</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle className="headdrop" nav caret>
                Contact Us
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
                <DropdownItem style={{fontWeight:"500"}}>
                  Option 1
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
         
          </Nav>
         
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header3;
