import React from 'react'
import profileImage from "../assest/img/Amit.jpg"
import downloadfile from '../assest/img/cvamit.pdf';
const Header = () => {
    const handleDownload = () => {
        // Create a link element to trigger download
        const downloadLink = document.createElement('a');
        downloadLink.href = 'cvamit.pdf'; // Use the imported file path
        downloadLink.download = 'Node JS developer Amit Misal .pdf'; 
        downloadLink.click(); 
      };

    return (
        <div className='header-container' id='home'>
            <div className='header-left'>
                <div className='profile-image'>
                    <img src={profileImage} />
                </div>
            </div>
            <div className='header-right'>
                <div className='header-right-content'>
                    <h3>Full Stack Developer</h3>
                    <h1>Amit Misal</h1>
                    <p>I'm passionate about developing a better world through technology. I have graduated from the Mumbai University with Bsc in Information Technology. I've always been an analytical problem solver as well and the software developing process is a great fit for my personality and thinking style</p>
                    <div className='header-right-button'>
                        <a href='#download'><button onClick={handleDownload}>Download</button></a>
                        <a href='#contact'><button>Contact</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header