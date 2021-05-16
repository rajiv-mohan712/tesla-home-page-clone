import React from "react"
import Fade from "react-reveal/Fade"

function Section({
  title,
  description,
  leftButton,
  rightButton,
  bgImage,
  arrowFlag,
}) {
  return (
    <div
      className=' container h-screen w-screen  bg-cover bg-no-repeat bg-center flex flex-col section '
      style={{ backgroundImage: `url(/images/${bgImage})` }}
    >
      <div className='flex flex-col justify-items-center items-center pt-24 flex-grow'>
        <Fade bottom>
          <h2 className='text-4xl font-bold '> {title} </h2>
          <p className='pt-2 text-sm opacity-80 font-thin'>{description}</p>
        </Fade>
      </div>
      <div className='flex flex-col justify-items-center items-center  mx-auto pb-10 space-y-2 '>
        <div className='flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2 text-xs'>
          <Fade left>
            <button className='btn bg-black text-white bg-opacity-60 '>
              {leftButton}
            </button>
          </Fade>
          {rightButton && (
            <Fade right>
              <button className='btn bg-white text-black bg-opacity-60 '>
                {rightButton}
              </button>
            </Fade>
          )}
        </div>
        {arrowFlag && (
          <img
            src='/images/down-arrow.svg'
            alt='arrow'
            className='h-10 transform animate-bounce'
          />
        )}
      </div>
    </div>
  )
}

export default Section
