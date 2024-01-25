import React from 'react';
import { MdSupervisedUserCircle } from 'react-icons/md';

const Card = ({ range, revenue, improve }: any) => {
  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px] flex gap-[20px] cursor-pointer w-full hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-[20px]">
        <span>Total Revenue</span>
        <span className="text-[24px] font-[500]">
          ${new Intl.NumberFormat('id-ID').format(revenue)}
        </span>
        <span className="text-[14px] font-[300]">
          <span className="text-[#32cd32]">{improve}% </span>
          more than previous {range}
        </span>
      </div>
    </div>
  );
};

export default Card;
