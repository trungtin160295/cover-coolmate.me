import React from 'react'

export default function Loading({linkImg,className}) {
  return (
    <div className={`loading img ${className}`}>
                <img src={linkImg} alt="" />
    </div>
  )
}
