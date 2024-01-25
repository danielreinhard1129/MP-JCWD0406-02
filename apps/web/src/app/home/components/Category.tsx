import { PiMicrophoneStageDuotone } from 'react-icons/pi';
import { IoCarSportOutline } from 'react-icons/io5';
import { MdSportsHandball } from 'react-icons/md';

export const Category = () => {
  return (
    <section className="flex gap-3 md:w-full p-2 rounded-full bg-white shadow-lg">
      <div className="text-3xl text-white rounded-full p-6 bg-teal-600">
        <PiMicrophoneStageDuotone />
      </div>
      <div className="text-3xl text-white rounded-full p-6 bg-teal-600">
        <IoCarSportOutline />
      </div>
      <div className="text-3xl text-white rounded-full p-6 bg-teal-600">
        <MdSportsHandball />
      </div>
      <div className="text-3xl text-white rounded-full p-6 bg-teal-600">
        <IoCarSportOutline />
      </div>
    </section>
  );
};
