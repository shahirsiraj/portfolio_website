import React from 'react'
import {Octokit} from "octokit"

export default function getProjectData() {

    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    })

}