import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const About = () => {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 0,
    onRest: () => set(!flip),
  });
  return (
    <div>
      <animated.div
        className="text-5xl font-mono font-extrabold text-center my-16 py-10 text-indigo-500"
        style={props}
      >
        ABOUT IS ON README FILE
      </animated.div>
    </div>
  );
};

export default About;
