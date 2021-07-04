import React from 'react';
import { Navbar } from 'react-bootstrap';
import { HeaderContainer } from './header.styles';


const Header: React.FC = () => {


  return (
    <HeaderContainer>
      <Navbar>
        <img src="img/logo.svg" alt=""/>
      </Navbar>
    </HeaderContainer>
  );
};

export { Header };
