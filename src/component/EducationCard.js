import React from 'react'
import {FaGraduationCap} from "react-icons/fa"

const EducationCard = () => {
  return (
    <div className='education_card_container'>
        <div className='education_icon'>
            <FaGraduationCap/>
        </div>
        <div className='education_card_content'>
            <p>2019-2020</p>
            <h3>Bsc Information Technology</h3>
            <p>Mumbai University</p>
        </div>
    </div>
  )
}

export default EducationCard