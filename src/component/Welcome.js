import React from 'react'
import helloImage from "../assest/img/hello.gif"

const Welcome = () => {
  return (
    <div className='welcome_container' id='welcome'>
          <div className='welcome-left'>
            <h1>Welcome to Amit’s World!</h1>
            <p>My name Amit Misal. I'm from Mumbai, Maharastra. I am a Full Stack Developer.</p>
            <p>I am a passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact. Also I am a strong believer that imagination brings the change and shows a path to develop something amazing and interesting</p>
          </div>
          <div className='welcome-right'>
            <div className='welcome_image'>
              <img src={helloImage} />
            </div>
          </div>
        </div>
  )
}

export default Welcome