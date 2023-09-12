import React from 'react'
import Link from 'next/link'

interface NavbarComponents{
    href: string 
    title: any
}

export default function NavbarComponents({ href, title }: NavbarComponents) {
    return (
        <Link
            href={href}
            className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
        > {title}
        </Link>
    )
    
}