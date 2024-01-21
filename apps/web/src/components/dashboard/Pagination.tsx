import React from 'react'

const Pagination = () => {
  return (
    <div className='p-[10px] flex justify-between mt-10'>
        <button className='bg-white text-black rounded-sm py-[5px] px-[10px] cursor-pointer cursor-not-allowed:disabled' disabled>Previous</button>
        <button className='bg-white text-black rounded-sm py-[5px] px-[10px] cursor-pointer'>Next</button>
    </div>
  )
}

export default Pagination