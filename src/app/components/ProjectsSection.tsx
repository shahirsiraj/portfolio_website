import React from 'react'
import ProjectsCard from './ProjectsCard'

const PROJECT_DATA = [
    {
        id: 1, 
        title: 'Space Invaders Recreation', 
        description: 'A recreation of Space Invaders made with vanilla Javascript, HTML and CSS.',
        tech_used: 'Javascipt Canvas methods',
        image: '/images/project1.png',
        tag: ["All","Web"]
    
    },
    {
        id: 2, 
        title: 'Aurelius, A mental health buddy', 
        description: 'A mental health assistant app built in the front-end that can assist in keeping track of your emotions and how to manage them effectively. Includes an OpenAI powered chatbot that users may talk to when they are feeling down', 
        tech_used: 'React, Figma, Vercel, OpenAI API, Material UI',
        image: '/images/project2.png',
        tag: ["All", "Web"]
    },
    {
        id: 3, 
        title: 'CodeHive, A social media platform for Developers', 
        description: 'A full-stack application that is a social media platform meant for fellow developers to share their code snippets and project updates/timelines. includes authentication and refresh tokens',
        tech_used: 'React, NodeJS, Express, MongoDB, JSON WebToken, OAuth, Github API, Jira, Figma',
        image: '/images/project3.png',
        tag: ["All","Web"]
    }, 
    {
        id: 4, 
        title: 'Demeter, A makan-place tracker',
        description: 'A full-stack application that enables users to search for places to eat using the Google Places API and save them to lists, which can then be share with other users. When in doubt, users can randomise a selection from their lists',
        tech_used: 'React, NodeJS, Express, MySQL, Google Places API, JSON Web Token, Redux',
        image: '/images/project4.png',
        tag: ["All","Web"]
    }, 
    {
        id: 5, 
        title: 'Real-time Chat-Room',
        description: 'A real-time chat room that enables users to chat with other users who have signed up, and create rooms which allow multiple people to join, functioning as group chats.',
        tech_used: 'React, Firebase, Google OAuth',
        image: '/images/project5.png',
        tag: ["All","Web"]
    }
]


export default function ProjectsSection() {
    return (
        <>
            <h2>My Projects</h2>
            <div>{PROJECT_DATA.map((project) => (
                <ProjectsCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tech_used={project.tech_used}
                    imgUrl={project.image}
                />
            ))}
            </div>
        
        </>

    )
}