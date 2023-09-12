"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import NavbarComponents from './NavbarComponents'
import MenuOverlay from './MenuOverlay'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const NAVBAR_COMPONENTS = [
    {
        title: "About",
        path: '#about'
    },
    {
        title: 'Projects',
        path: '#projects'
    },
    {
        title: 'Contact',
        path: '#contact'
    },
    {
        title: 'Blog',
        path: '#blog'
    }
]

export default function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false)

    // function toggleNavbar() {
    //     setNavbarOpen
    // }

    
    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 pt-4'>
                <Link href={'/'} className='text-2xl text-white font-semibold' > LOGO</Link>
                <div className='mobile-menu block md:hidden'>
                    {
                        !navbarOpen ? (
                            <button onClick={()=> setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounder border-slate-200 text-slate200 hover:text-white hover:border-white text-slate-200'>
                                <Bars3Icon className='h-5 w-5' /></button>
                        ) : (
                                <button onClick={()=>setNavbarOpen(false)}  className='flex items-center px-3 py-2 border rounder border-slate-200 text-slate200 hover:text-white hover:border-white text-slate-200'>
                                <XMarkIcon className='h-5 w-5' /></button>
                    )
                    }
                    
                </div>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10'>
                        {NAVBAR_COMPONENTS.map((link, index) => (
                            <li key={index}>
                                <NavbarComponents href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={NAVBAR_COMPONENTS} />: null}
        </nav>
    )
}
