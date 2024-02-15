import React from 'react'
import Lottie from 'react-lottie';

import EnergyAnimation from '../../../../public/assets/motion/energy.json'

export const VoiceSpectrum: React.FC = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: EnergyAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div>
      <Lottie options={defaultOptions}
        height={48}
        width={48}
      />
    </div>
  )
}