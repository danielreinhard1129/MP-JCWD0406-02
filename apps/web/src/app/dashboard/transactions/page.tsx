import Pagination from '@/components/dashboard/Pagination'
import Image from 'next/image'
import React from 'react'

const transactions = () => {
  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px] mt-[20px]">
    <table className="w-full">
      <thead>
        <tr>
          <td>Name</td>
          <td>Ticket</td>
          <td>Status</td>
          <td>Date</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='h-16'>
            <div className='flex gap-[10px] items-center'>
            <div>
                <Image
                  src="/noAvatar.png"
                  alt=""
                  width="40"
                  height="40"
                  className="object-cover rounded-full"
                />
              </div>
              John Doe
            </div>
          </td>
          <td>Cold Play</td>
          <td>
            <span className="rounded-lg p-2 text-[14px] text-white bg-[#f7cb7375]">Pending</span>
          </td>
          <td>13.01.2023</td>
          <td>$3.200</td>
        </tr>
      </tbody>
    </table>
    <Pagination/>
  </div>
  )
}

export default transactions