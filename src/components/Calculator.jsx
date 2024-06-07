import { useState } from "react";
import React from "react";
import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";
import styles from "./Calculator.module.css";

const calculator = () => {
    
    const [calVal, setCalVal] = useState("");
    

    const onButtonClick = (buttonText) => {
      if(buttonText === "C") {
        setCalVal("");
      } else if(buttonText === "=") {
        setCalVal(eval(calVal));
      } else {
        setCalVal(calVal + buttonText);
      }
    }


    return (
    <>
      <div className="calculator border-2 border-gray-300 rounded-lg max-w-[350px] h-[calc(100vh)]  m-auto bg-[#243441] h-100vh md:w-full" >
        
        <Display displayValue={calVal} />

        <ButtonsContainer onButtonClick = {onButtonClick} />
        
      </div>
    </>
  );
};

export default calculator;
