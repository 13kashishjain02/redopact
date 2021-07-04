import React, {  } from 'react';
import {
  Navbar,
  Nav,
  NavbarText
} from 'reactstrap';

const Header1 = () => {


  return (
    <div>
      <Navbar expand="md" style={{padding:"30px 10px",backgroundColor:"#f1ecec",borderBottom:"2px solid black"}} >
        <Nav  style={{position:"absolute", right: "0"}}>
          <NavbarText style={{paddingRight:"20px",margin:"0px",padding:"0px" ,color:"#008080",marginRight:"20px", fontWeight:"700"}}> 
          <i class="fas fa-truck"> </i> 
          &nbsp;&nbsp;Free Delivery (Over 1000 INR*) 
            </NavbarText>
          <NavbarText style={{paddingRight:"20px",margin:"0px",padding:"0px" ,color:"#008080",marginRight:"20px", fontWeight:"700"}}> 
          <i class="fas fa-reply"> </i> 
          &nbsp;&nbsp;Easy Returns 
            </NavbarText>
          <NavbarText style={{paddingRight:"20px",margin:"0px",padding:"0px" ,color:"#008080",marginRight:"20px", fontWeight:"700"}}> 
          <i class="fas fa-coins"> </i> 
          &nbsp;&nbsp;Best Deals
            </NavbarText>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Header1;
