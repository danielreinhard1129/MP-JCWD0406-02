import Image from 'next/image';
import React from 'react';

const Transactions = () => {
  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px]">
      <h2 className="mb-[20px] font-[200] text-[#b7bac1] text-xl">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='flex gap-[10px] items-center h-16'> 
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
            </td>
            <td>
              <span className="rounded-lg p-2 text-[14px] text-white bg-[#f7cb7375]">Pending</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className='flex gap-[10px] items-center h-16'>
              <div className="user">
                <Image
                  src="/noAvatar.png"
                  alt=""
                  width="40"
                  height="40"
                  className="object-cover rounded-full"
                />
              </div>
              John Doe
            </td>
            <td>
              <span className="rounded-lg p-2 text-[14px] text-white bg-[#afd6ee75]">Done</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td className='flex gap-[10px] items-center h-16'>
              <div className="user">
                <Image
                  src="/noAvatar.png"
                  alt=""
                  width="40"
                  height="40"
                  className="object-cover rounded-full"
                />
              </div>
              John Doe
            </td>
            <td>
              <span className="rounded-lg p-2 text-[14px] text-white bg-[#f7737375]">Cancelled</span>
            </td>
            <td>14.02.2024</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
