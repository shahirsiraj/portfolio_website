import React from 'react'

export default function ProjectsCard({imgUrl, title, description}) {
    return (
        <div>
            <div
                className='h-52 md:h-72'
            style={{background:`url(${imgUrl})`, backgroundSize:"cover"}}
            >
                <div className='text-white'>
                    <h5> {title}</h5>
                    <p>{description}</p>

                </div>

            </div>
     </div>   

    )
}