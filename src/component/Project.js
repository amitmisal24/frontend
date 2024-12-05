import React from 'react'
import Filesharing from "../assest/img/Filesharing.png"
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div className='project' id='project'>
          <h1 className='heading text-center'>Project</h1>
          <div className='project_content'>
            <ProjectCard name="File Sharing" url="https://github.com/amitmisal24/file-sharing-app" img={Filesharing}/>
          </div>
        </div>
  )
}

export default Project