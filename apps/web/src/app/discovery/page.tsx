'use client';

import React from 'react';
import { CardAllEvent } from '../home/components/card-section/CardAllEvents';
import { SearchBar } from '@/components/SearchBar';
import { JumbotronDiscovery } from '../home/components/JumbotronDiscovery';
import PaginationFix from './components/PaginationFix';

const Discovery = () => {
  return (
    <>
      <section className="w-full">
        <div className="max-h-[600px]">
          <JumbotronDiscovery />
        </div>
      </section>
      <section className="flex justify-between w-full max-w-6xl mx-auto ">
        {/* <div className="items-center lg:items-start -mt-8">
          <SearchBar />
        </div> */}
        <div className="items-center lg:items-start -mt-12"></div>
      </section>
      <section className=" container h-fit max-w-6xl mx-auto mt-4">
        <div className="flex justify-between px-4 py-6 pb-4 items-center">
          <h1 className="font-semibold text-3xl">All Event</h1>
        </div>
        <div className="container max-w-6xl mx-auto flex ">
          <PaginationFix />
        </div>
      </section>
    </>
  );
};

export default Discovery;
