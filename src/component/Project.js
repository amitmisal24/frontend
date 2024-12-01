import React from 'react'
import growwImage from "../assest/img/groww.png"
import masaiImage from "../assest/img/masai.png"
import window11Image from "../assest/img/window11.png"
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div className='project' id='project'>
          <h1 className='heading text-center'>Project</h1>
          <div className='project_content'>
            <ProjectCard name="Groww Clone" url="https://github.com/IsAmitprajapati/Groww-Website-Clone" img={growwImage}/>
            <ProjectCard name="Masai School clone" url="https://github.com/IsAmitprajapati/Masai-school-clone-website" img={masaiImage}/>
            <ProjectCard name="Window11 clone" url="https://github.com/IsAmitprajapati/Window11-Clone" img={window11Image}/>
          </div>
        </div>
  )
}

export default Project