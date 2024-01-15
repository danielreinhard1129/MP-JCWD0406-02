'use client';
import { Button } from 'flowbite-react';
import { FiSearch } from 'react-icons/fi';
export const SearchBar = () => {
  return (
    <form className="w-[250px] lg:w-[500px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Apa sih yang dicari?"
          className="w-full p-4 rounded-full bg-white"
        />
        <Button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full text-black text-xl shad">
          <FiSearch />
        </Button>
      </div>
      {/* <div className="absolute top-20 p-4 bg-slate-800 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2"></div> */}
    </form>
  );
};
