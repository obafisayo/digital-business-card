import React from 'react'

const CompanyInfo = ({person, front}) => {
  return (
    <div className={`flex items-center justify-end gap-2 ${front ? "w-full" : ""}`}>
        <div className='h-7 w-7'>
            <img className='w-full h-full' src={person.logo} alt="Logo" />
        </div>
        <div className='text-white'>
            <h3 className='font-semibold'>{person.company_name}</h3>
            <p className='text-xs font-light'>{person.company_tagline}</p>
        </div>
    </div>
  )
}

export default CompanyInfo;
