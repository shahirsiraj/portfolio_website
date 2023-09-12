import React from 'react'
import NavbarComponents from './NavbarComponents'

export default function MenuOverlay({ links }) {
    return (
        <ul className='flex flex-col py-4 items-center'>
            {links.map((link, index) => (
                <li key={index}>
                     <NavbarComponents href={link.path} title={link.title} />

                </li>
               ))}
        
        
        </ul>
    )
}