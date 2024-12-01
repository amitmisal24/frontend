import React from 'react'
import {MdEmail,MdPhoneInTalk,MdLocationOn} from "react-icons/md"
import {SiLinkedin,SiInstagram,SiGithub} from "react-icons/si"
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
     const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length === 0) {
      // Add email-sending logic here (e.g., using an API or service like EmailJS)
      console.log('Form Data Submitted:', formData);
      setIsSubmitted(true);
      // Clear the form
      setFormData({ name: '', email: '', message: '' });
    } else {
      setErrors(newErrors);
    }
  };
  return (
     <div className='contact' id='contact'>
      <h1 className='heading'>Contact Us</h1>
      <div className='contact_content'>
       <form className='contact-from'>

      <input type="text" name="name"placeholder='Name' value={formData.name} onChange={handleChange}/>
      {errors.name && <p className="error">{errors.name}</p>}

      <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange}/>
      {errors.email && <p className="error">{errors.email}</p>}
     
      
      <textarea  id="myTextarea" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
     
      {errors.message && <p className="error">{errors.message}</p>}


      <button type='submit'>Send</button>

      {isSubmitted && <p className="success">Message sent successfully!</p>}

    </form>
    <div className='socialMedia'>
      <div className='socialMedia_item'>
        <MdEmail/>
        <p>amitmisal72@gmail.com</p>
      </div>
      <div className='socialMedia_item'>
        <MdPhoneInTalk/>
        <p>+91 7506470647</p>
      </div>
      <div className='socialMedia_item'>
        <MdLocationOn/>
        <p>Mumbai, Maharastra</p>
      </div>

      <div className='socialMedia_personal'>
        <a href='https://www.linkedin.com/in/amit-misal-72449833a/'><SiLinkedin/></a>
        <a href='https://www.instagram.com/am1tm1sal'><SiInstagram/></a>
        <a href='https://github.com/amitmisal24'><SiGithub/></a>
      </div>  
    </div>
    </div>
  </div>
  )
}

export default Contact