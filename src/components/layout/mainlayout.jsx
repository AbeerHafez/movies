import React from 'react'
import Navbar2 from './header';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { LangContext, ModeContext } from '../../services/provider/context';
export default function MainLayout() {

  const {lang } = useContext(LangContext);
  const {mode } = useContext(ModeContext);


  return (
    <div  dir={lang==='ar'?'rtl':'ltr'} 
    className={mode === 'light' ? 'dark-mode' : ''}
     >
    
    <Navbar2 />
   <Outlet />
   </div>
  )
}