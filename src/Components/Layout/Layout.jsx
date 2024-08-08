import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export function Layout({ children }) {
    return(
        <>
        <Navbar/>
        {children}
        <Footer/>
        </>
    )
}