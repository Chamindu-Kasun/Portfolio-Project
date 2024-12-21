import Image from 'next/image';
import React from 'react'
import SammaniProfileImage from "../../images/SammaniPhoto.jpg"

const AboutImage: React.FC = () => {
    return (
        <div className='about_image_container'>
            <Image
                src={SammaniProfileImage}
                width={300}
                
                alt="Profile picture"
                unoptimized
            />
        </div>
    )
}

export default AboutImage;