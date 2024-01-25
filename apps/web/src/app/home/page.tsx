'use client';

import { CardEvent } from '@/app/home/components/CardEvent';
import { Category } from '@/app/home/components/Category';
import { EventCarousel } from '@/app/home/components/EventCarousel';
import { Jumbotron } from '@/app/home/components/Jumbotron';
import { SearchBar } from '@/components/SearchBar';
import axios from 'axios';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import { CardRecentlyAddedEvent } from './components/card-section/CardRecentlyAdded';
import { CardRandomEvent } from './components/card-section/CardRandomEvent';
import { CardAllEvent } from './components/card-section/CardAllEvents';

const baseUrl = 'http://localhost:8000/api';
const HomePage = () => {
  const [input, setInput] = useState([]);
  const getAllEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/events/all-events`);
      setInput(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  return (
    <div>
      <section className="w-full">
        <div className="max-h-[600px]">
          <Jumbotron />
        </div>
      </section>
      <section className="px-2">
        <section className="flex justify-between w-full max-w-6xl mx-auto ">
          <div className="items-center lg:items-start -mt-8">
            <SearchBar data={input} />
          </div>
          {/* <div className="items-center lg:items-start -mt-12">
          <Category />
        </div> */}
        </section>
        <section className="w-full max-w-6xl mx-auto">
          <div className="h-fit max-w-6xl mx-auto mt-8 items-center lg:items-start">
            <div className="flex justify-between px-4 py-2 pb-4 items-center">
              <h1 className="font-semibold text-2xl">Recently Added</h1>
            </div>
            <div className="container max-w-6xl ">
              <div className="container flex flex-wrap gap-3">
                <CardRecentlyAddedEvent />
              </div>
            </div>
          </div>
        </section>
        <section className=" container h-fit max-w-6xl mx-auto mt-8">
          <div className="flex justify-between px-4 py-2 pb-4 items-center">
            <h1 className="font-semibold text-2xl">More Event</h1>
            <h1 className="font-semibold">Explore</h1>
          </div>
          <div className="container max-w-6xl flex gap-3 ">
            <CardRandomEvent />
          </div>
        </section>
      </section>
    </div>
  );
};

export default HomePage;
