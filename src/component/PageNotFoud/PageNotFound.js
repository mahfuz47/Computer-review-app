import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const PageNotFound = () => {
    const [flip, set] = useState(false);
    const props = useSpring({
      to: { opacity: 1 },
      from: { opacity: 0 },
      reset: true,
      reverse: flip,
      delay: 200,
      onRest: () => set(!flip),
    });

    return (
      <div className=" grid justify-items-center">
        <animated.div
          className=" font-bold text-6xl text-red-700 font-mono"
          style={props}
        >
          EI PAGE DUNIAY NAI
        </animated.div>

        <div>
          <img className="w-100" src={require("./404-image.jpg")} alt="" />
        </div>
      </div>
    );
};

export default PageNotFound;