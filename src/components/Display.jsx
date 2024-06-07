import React from 'react'

const Display = ({ displayValue }) => {
  return (
    <div className="calculator-display mx-4 overflow-hidden mt-[50%] md:mt-[35%]">
          <input
            type="text"
            className="w-full text-6xl text-white rounded-lg overflow-hidden focus:outline-none p-1 pl-2 bg-[#243441] text-right"
            value={displayValue}
            readOnly
          
          />
        </div>
  )
}

export default Display
