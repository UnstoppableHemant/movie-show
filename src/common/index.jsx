import React from 'react';
import Header from './component/Header';
import Home from '../pages/Home';

const AppLayout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default AppLayout