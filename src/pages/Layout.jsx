import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/ScrollToTop'

export default function Layout() {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
