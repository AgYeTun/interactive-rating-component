import React from "react";
import { useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";

const Thankyou = () => {
  const { rate } = useParams();
  console.log(rate);
  return (
    <div className="w-[400px] h-fit bg-dark-blue py-[36px] px-5 mx-5 flex flex-col items-center gap-7 rounded-[30px] shadow-lg animate__animated animate__zoomIn">
      <div className="">
            <ReactSVG src="../src/assets/images/illustration-thank-you.svg" />
      </div>
      <p className="text-orange bg-medium-grey rounded-full py-1 px-5 w-fit">You selected {rate} out of 5</p>
      <h1 className="text-white text-3xl">Thank You!</h1>
      <p className="text-light-grey text-center mb-1">We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!</p>
    </div>
)};

export default Thankyou;
