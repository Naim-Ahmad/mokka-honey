import React from 'react'

export default function HeaderAll(props) {
    const image = {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props.imageUrl}) no-repeat center/cover`,
    height: '30vh'
    }

  return (
    <header style={image}>
        <div className="container d-flex justify-content-center align-items-center h-100">
            <p className='fw-bolder common-color fs-1 fs'>{props.children}</p>
        </div>
    </header>
  )
}
