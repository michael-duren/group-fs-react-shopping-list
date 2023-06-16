import React from 'react';
import './Header.css';
import { AppBar } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <header className="banner-header">
        <h1>My Shopping List</h1>
      </header>
    </AppBar>
  );
}

export default Header;
