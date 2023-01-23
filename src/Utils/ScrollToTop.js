import React, { useEffect, useState } from 'react'
import '../Styles/ScrollToTop.css'

export default function ScrollToTop() {
  const [shoTopBtn, setShowTopBtn] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 1000){
        setShowTopBtn(true)
      }else{
        setShowTopBtn(false)
      }
    })
  }, [])
  
  const goToTop = ()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    shoTopBtn &&
    <div className='top-to-btm'>
        <svg onClick={goToTop} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-up-circle-fill icon-position icon-style" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
        </svg>
    </div>
  )
}
