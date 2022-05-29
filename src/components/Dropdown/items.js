import React from 'react';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const navItemsLink = [
  {lable:"Home", onClick:()=> console.log('home')},
  {lable:"About", onClick:()=> console.log('About')},
  {lable:"Contact", onClick:()=> console.log('Contact')}
]

function Items ({lable}){
    return (
      <Nav>
        {lable.map((v, i)=>{
          return <Nav.Link key={i} style={{padding:5}} onClick={v.onClick}>{v.lable}</Nav.Link>
        })}
      </Nav>
    )
  }
  export default Items