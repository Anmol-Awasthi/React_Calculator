import React from "react";

const ButtonsContainer = ({onButtonClick}) => {
  
    const Buttons = ["7", "8", "9", "C", "4", "5", "6", "+", "1", "2", "3", "-", "0", "=", "/", "+"];
      
    return (
       <>
        <div className="buttonsContainer flex flex-wrap justify-between gap-4 mt-4 mx-4">
        
        {
            <div className="buttons">
                {Buttons.map((button) => {
                    return <button className="h-[60px] w-[60px] bg-[#243441] shadow-[0_-1px_2px_2px_rgba(255,255,255,0.5)] rounded-full text-3xl mx-2 my-3" onClick = {() => {onButtonClick(button)}}>{button}</button>;
                })}
            </div>

        }

      </div>
      </>
  );
};

export default ButtonsContainer;
