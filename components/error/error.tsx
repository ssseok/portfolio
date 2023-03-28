import React from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../../public/404-animation.json";

export default function Error() {
  return <Lottie loop animationData={lottieJson} play />;
}
