import React from 'react'

function Nav() {
  return (
    <div className='h-1/6 w-full bg-black '>
      <div className='h-full w-full flex ml-10 items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="4vw" height="5vh" viewBox="0 0 1024 1024">
              <path fill="white" d="M1023.65 290.48c.464-23.664-5.904-78.848-77.84-98.064L223.394 47.794c-52.944 0-96 43.055-96 96v128.704l-32-.08c-52.752.223-95.632 43.15-95.632 95.967v511.808c0 52.945 43.056 96 96 96h832.464c52.945 0 96-43.055 96-96zM191.393 143.793c0-16.72 12.88-30.463 29.216-31.871l706 142.88c.256.128-5.248 17.935-30.88 17.6H191.393zM960.24 880.21c0 17.664-14.336 32-32 32H95.76c-17.664 0-32-14.336-32-32V368.386c0-17.664 14.336-32 32-32h800.064c31.408 0 64.4-10.704 64.4-31.888V880.21h.016zM191.824 560.498c-35.344 0-64 28.656-64 64s28.656 64 64 64s64-28.656 64-64s-28.656-64-64-64z"/>
        </svg>
        <h2 className='font-myFont font-extralight relative '>Batua</h2>
      </div>

    </div>
  )
}

export default Nav
