import Pagination from '@/components/dashboard/Pagination'
import Image from 'next/image'
import React from 'react'

const Event = () => {
  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px] mt-[20px]">
      <table className="w-full">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='h-16'>
              <div className='flex gap-[10px] items-center'>
                <Image
                  src="/noProduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Cold Play
              </div>
            </td>
            <td>desc</td>
            <td>$999</td>
            <td>13.01.2023</td>
            <td>72</td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default Event