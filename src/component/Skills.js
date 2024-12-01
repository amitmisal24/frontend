import React from 'react'
import SkillCard from './SkillCard';

const Skills = () => {
  return (
    <div className='skills'>
    <h1 className='heading text-center'>Skills</h1>
    <div className='skills_content'>
      <div className='skills_item'>
        <SkillCard url={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"} />
        <SkillCard url={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"} />
        <SkillCard url={"https://d2vqpl3tx84ay5.cloudfront.net/500x/tumblr_lsus01g1ik1qies3uo1_400.png"} />
        <SkillCard url={"https://seeklogo.com/images/N/nodejs-logo-065257DE24-seeklogo.com.png"} />
        <SkillCard url={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"} />
        <SkillCard url={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} />
      </div>
      <div className='skills_item'>
      <SkillCard url={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"} />
        <SkillCard url={"https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"} />
        <SkillCard url={"https://d2vqpl3tx84ay5.cloudfront.net/500x/tumblr_lsus01g1ik1qies3uo1_400.png"} />
        <SkillCard url={"https://seeklogo.com/images/N/nodejs-logo-065257DE24-seeklogo.com.png"} />
        <SkillCard url={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"} />
        <SkillCard url={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"} />
      </div>
    </div>
  </div>
  )
}

export default Skills