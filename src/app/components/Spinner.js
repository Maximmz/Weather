import React from 'react'
import spinner from "/Users/Mazin/Desktop/Weather/weather/public/spinner.gif"

const Spinner = () => {
  return (
    <>
    <Image className='w-[200px] m-auto block' src={spinner} alt='loading..' />
    </>
  )
}

export default Spinner