import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Input,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div className="container-fluid" style={{padding:"15px 10px",backgroundColor:"#C3D6C9",width:"100%"}} >
        <div className="row" style={{margin:"0px"}}>
        <div className="col-2">
        <NavbarBrand href="/">LOGO</NavbarBrand>
        </div>
        <div className="col-1">
      
        </div>
        
       <div className="col-9">
        <Nav className=" na1" >
            <NavItem style={{textAlign:"center",color:"#000", fontWeight:"700"}} >
            <i className="material-icons p-0 m-0">person_outline</i>
              <NavLink style={{color:"#000"}} className="pt-0 mt-0 " href="/cart">Account</NavLink>
            </NavItem>
            <NavItem style={{textAlign:"center" ,color:"#000", fontWeight:"700"}} >
            <i className="material-icons p-0 m-0">favorite_border</i>
              <NavLink style={{color:"#000"}} className="pt-0 mt-0 " href="/cart">Wishlist</NavLink>
            </NavItem>
            <NavItem style={{textAlign:"center" ,color:"#000", fontWeight:"700"}} >
            <i className="material-icons p-0 m-0">add_shopping_cart</i>
              <NavLink style={{color:"#000"}} className="pt-0 mt-0 " href="/cart">Cart</NavLink>
            </NavItem>
            
          </Nav>
          </div>
          </div>
          <div className="container-fluid">
          <div className="col-sm-5 offset-2 na2"  >
        <Input style={{width:"100%", borderRadius:"30px", fontWeight:"bold"}} placeholder="Search...."/>
        </div>
       </div>
    </div>
  );
}

export default Example;