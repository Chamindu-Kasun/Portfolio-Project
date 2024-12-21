import React from 'react'
import AboutImage from './AboutImage'
import AboutDescription from './AboutDescription'

const About:React.FC = () => {
  return (
    <div className='about_section'>
        <AboutImage/>
        <AboutDescription/>
    </div>
  )
}

export default About