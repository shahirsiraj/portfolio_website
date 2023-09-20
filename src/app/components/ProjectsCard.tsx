import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from "next/link"

export default function ProjectsCard({imgUrl, title, description, tech_used}) {
    return (
        <div>
            <div
                className='h-52 md:h-72 rounded-t-xl relative group bg-contain bg-center'
            style={{background:`url(${imgUrl})`}}
            >
                <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
                    <Link href='/' className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white'>
                        <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:white'/>
                    </Link>

                </div>
                <div className='text-white rounder-b-xl bg-[#181818] py-4 px-2'>
                    <h5 className='text-xl font-semibold mb-2'> {title}</h5>
                    <p className='text-[#ADB7BE]'>{description}</p>
                    <p>Tech Used: {tech_used}</p>


                </div>

            </div>
     </div>   

    )
}