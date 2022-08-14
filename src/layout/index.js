import React from 'react';
import Nav from './Nav';
import Footer from './footer';

const Layout = (props) =>
<>
  <div class='text-center p-10 h-screen flex-1'>
    {props.children}
  </div>
</>

export {Layout, Nav, Footer };