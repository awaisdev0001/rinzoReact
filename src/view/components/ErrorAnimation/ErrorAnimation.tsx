import { useLottie } from 'lottie-react';
import {animations} from '../SparkingAnimation'


export const ErrorAnimation = () => {
  const keys = Object.keys(animations);
  const animation = (animations as any)[keys[ keys.length * Math.random() << 0]];

  console.log(animation)
  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};
