import React from 'react';
import './Header.css';
import { AppBar } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

function Header() {
  return (
    <AppBar position="static">
      <header className="banner-header">
        <h1>My Shopping List</h1>
        <LocalGroceryStoreIcon fontSize="large" />
      </header>
    </AppBar>
  );
}

export default Header;
