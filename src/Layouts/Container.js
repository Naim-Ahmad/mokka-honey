import React from 'react'

export default function Container({children}) {
  return (
    <div className='container bg-danger'>
        {children}
    </div>
  )
}
