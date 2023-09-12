'use client'
import React from "react";
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {


    return(
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-300 to-white via-blue-300" >
                        Hello World, I'm  </span>
                    <br></br>
                    <TypeAnimation
                    sequence={
                        [
                            'Shahir',
                            1000,
                            'a Software Engineer',
                            1000,
                            'a Psychology Graduate',
                            1000,
                            'an Investigation Officer',
                            1000
                        ]
                    }
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                    />
                    
                    </h1>
                    <p className="text-white text-base sm:text-lg mb-6 lg:text-xl">
                    This is my portfolio! I'm a software engineer with a passion for full-stack development and tech.
                    </p>
                    <div>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-slate-500 to-white via-blue-300 hover:bg-slate-300 text-black">
                            Send me an Email!
                        </button>
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4  bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                            Download Resume!
                        </button>
                    </div>
                </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0"> 
           <div className="rouned-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative ">
           <Image
            src ="/images/main-image.jpg"
            alt="profile-picture"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 mt-14"
            width={250}
            height={250}
            />
            </div>
        </div>
    </div>
</section>
        
    )

}