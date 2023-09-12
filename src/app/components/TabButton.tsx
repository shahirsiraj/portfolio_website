import React from 'react'

export default function TabButton({ active, selectTab, children }) {
    const buttonClasses = active ? 'text-white border-b border-slate-400' : 'text-[#ADB7BE] border-b border-slate-400'

    return (
        <button
           
            onClick={selectTab}
        >
            <p
                className={`mr-3 font-semibold hover:text-white {buttonClasses}`}
            >
            {children}
            </p>
            
            </button> 
       
    )

}