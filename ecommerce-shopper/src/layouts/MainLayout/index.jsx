import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <>
       <Header/>
        <Outlet />
        <Footer/>
    </>
   
  )
}
