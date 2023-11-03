"use client";

import React, { Children } from 'react'
import GlobalStyleProvider from './GlobalStyleProvider';

interface Props{
    children : React.ReactNode;
}
function ContextProvider({children}: Props) {
  return <GlobalStyleProvider>{children}</GlobalStyleProvider>
}

export default ContextProvider