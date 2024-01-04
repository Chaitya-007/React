import React from "react";
import { FcLike, FcDislike } from "react-icons/fc";
import { useState } from "react";

interface LikeProps
{
    onClick: () => void;
}

const Like = ({onClick}: LikeProps) => {
  const [value, setvalue] = useState(true);

  const toggle = () => {
    setvalue(!value);
    onClick();
  }


  if (value) {
    return (
      <div>
        {/* <FcLike color="blue" size="2em" onClick={() => setvalue(false)}></FcLike> */}
        <FcLike color="blue" size="2em" onClick={toggle}></FcLike>
      </div>
    );
  } else {
    return (
        <div>
          <FcDislike color="blue" size="2em" onClick={toggle}></FcDislike>
        </div>
      );
  }
};

export default Like;
