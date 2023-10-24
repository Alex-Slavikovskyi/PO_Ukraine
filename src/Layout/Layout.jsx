import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Components/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};
