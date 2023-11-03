"use client";

import React from 'react'
import GlobalStyleProvider from './GlobalStyleProvider';

interface Props{
    children : React.ReactNode;
}
function ContextProvider() {
  return (
    <GlobalStyleProvider>
        ContextProvider
    </GlobalStyleProvider>
  )
}

export default ContextProvider