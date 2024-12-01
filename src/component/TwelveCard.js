import React from "react";
import {FaGraduationCap} from "react-icons/fa"

const TwelveCard = () => {
    return (
      <div className='education_card_container'>
          <div className='education_icon'>
              <FaGraduationCap/>
          </div>
          <div className='education_card_content'>
              <p>2015-2016</p>
              <h3>12th-Science</h3>
              <p>Konkan Board</p>
          </div>
      </div>
    )
  }
  
  export default TwelveCard