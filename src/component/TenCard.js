import React from "react";
import {FaGraduationCap} from "react-icons/fa"

const TenCard = () => {
    return (
      <div className='education_card_container'>
          <div className='education_icon'>
              <FaGraduationCap/>
          </div>
          <div className='education_card_content'>
              <p>2013-2014</p>
              <h3>10th</h3>
              <p>Konkan Board</p>
          </div>
      </div>
    )
  }
  
  export default TenCard