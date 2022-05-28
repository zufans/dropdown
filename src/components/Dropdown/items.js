import React from 'react';
import Nav from 'react-bootstrap/Nav';
function ZFNavItems ({lable, onClick, style}){
    return <Nav.Link style={{padding:5}} onClick={onClick}>{lable}</Nav.Link>
  }

  export default ZFNavItems