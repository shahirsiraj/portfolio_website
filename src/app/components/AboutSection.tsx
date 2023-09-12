"use client"
import React, {useTransition, useState} from "react"
import Image from 'next/image'
import TabButton from "./TabButton"


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Express</li>
                <li>Python</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>General Assembly Software Engineering Immersive</li>
                <br></br>
                <li>Bachelor of Psychological Science (Honours), James Cook University Singapore </li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Investigation Officer, Ministry of Manpower</li>
                <br></br>
                <li>Crisis Support Associate, Samaritans of Singapore</li>
                <br></br>
                <li>Research Process Auditor, RS Audit (RySense Group)</li>
            </ul>
            
        )
    }
]

export default function AboutSection() {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition() 

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16">
                {/* <Image/> */}
                <div className="mt-4 md:mt=0 text-left flex flex-col h-full">
                    <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                    Hello, I'm Shahir, a full-stack software engineer with a passion for innovation and a background in psychological sciences. I have experience working with Javascript, Typescript, React, Redux, Node.js, Express, MongoDB, Mongoose, MySQL, Sequelize, Firebase, HTML, CSS, Git and AWS.
                    
                    My journey into the world of technology began as a psychology graduate, where I cultivated a deep understanding of human behavior, decision-making processes, cognitive patterns and research methodologies. These insights sparked my fascination with creating software that not only solves technical challenges but also resonates with users on a profound level.

                    With expertise in multiple programming languages, front-end and back-end development, and data-driven decision-making, I bring a versatile skill set to every project. My approach to software engineering is unique — I blend technical excellence with a human-centered design philosophy. I thrive in dynamic, collaborative environments that demand creative problem-solving.
                    </p>
                    <div className="flex flex-row mt-8 justify-start">
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === "skills"}>{""}Skills{""}</TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === "education"}>{""}Education{""}</TabButton>
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === "experience"}>{""}Experience{""}</TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t)=>t.id===tab).content}</div>
            </div>
        </div>
 

        </section>
    )
     
}