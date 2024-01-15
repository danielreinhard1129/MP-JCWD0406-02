import { Button, Card, Carousel } from 'flowbite-react';
import { LuTicket } from 'react-icons/lu';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdCalendarMonth } from 'react-icons/md';
export const CardEvent = () => {
  return (
    <>
      <Card
        className="max-w-xs w-68 shadow-xl rounded-2xl"
        imgAlt="Foto Event"
        imgSrc="https://images.pexels.com/photos/433452/pexels-photo-433452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      >
        <div className="">
          <div className="flex gap-2 mb-3 items-center">
            <div className="bg-teal-500 rounded-full px-2 py-1 text-white text-xs">
              Category
            </div>
            <div className="bg-teal-500 rounded-full px-2 py-1 text-white text-xs">
              Category
            </div>
            <div className="bg-teal-500 rounded-full px-2 py-1 text-white text-xs">
              Category
            </div>
          </div>
          <a href="#" className="flex gap-2">
            <span className="text-lg">
              <MdOutlineLocationOn />
            </span>
            <h5 className="text-xs font-normal tracking-tight text-gray-900 dark:text-white">
              Pantai Nongsa Batam
            </h5>
          </a>
          <a href="#" className="flex gap-2">
            <span className="text-lg">
              <MdCalendarMonth />
            </span>
            <h5 className="text-xs font-normal tracking-tight text-gray-900 dark:text-white">
              22 Januari 2024
            </h5>
          </a>
          <a href="#" className="flex gap-2 mt-1 items-center">
            <h5 className="text-sm font-normal tracking-tight text-gray-900 dark:text-white">
              Hosted by :
            </h5>
            <h5 className="text-sm font-medium tracking-tight text-gray-900 dark:text-white">
              BINAL Community
            </h5>
          </a>
          <a href="#">
            <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
              Event Kejar Tangkap Pantat Gemoy
            </h1>
          </a>
          <h5 className="text-xs font-light tracking-tight text-gray-900 dark:text-white">
            Start From
          </h5>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                <LuTicket />
              </span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Rp. 500.000
              </span>
            </div>
            <h1 className="text-xs font-semibold"> Available </h1>
          </div>
        </div>
      </Card>
    </>
  );
};
