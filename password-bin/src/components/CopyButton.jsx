import React from 'react'
import { useLottie, useLottieInteractivity } from 'lottie-react'
import Checkmark from '../assets/lotties/Checkmark.json'

const style = {
    width: 30
};

const options = {
    animationData: Checkmark,
    autoplay: false
}

const CopyButton = () => {
    const lottieObj = useLottie(options, style);
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "click",
    actions: [
        
    ]
  })
}

export default CopyButton
