import React from 'react'

const RoundedButton = ({ icon, top, classname, hovertext, disabled, handler = () => {} }) => {
  return (
    <>
        {icon && <button 
            onClick={handler} 
            className={`${classname} absolute ${top? top : "top-1/2"} transform -translate-y-1/2 ${hovertext? hovertext : "hover:text-gray-800"} text-white rounded-full p-2`}
            disabled={disabled}
            >
                {icon}
        </button>}
    </>
  )
}

export default RoundedButton;
