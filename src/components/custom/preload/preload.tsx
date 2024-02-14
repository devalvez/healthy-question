import React from 'react'
import Lottie from 'react-lottie';

import DoctorAnimation from '../../../../public/assets/motion/preload.json'

export const Preload: React.FC = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: DoctorAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Lottie options={defaultOptions}
      height={500}
      width={500}
    />
  )
}