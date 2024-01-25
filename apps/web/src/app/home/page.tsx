import { CardEvent } from '@/components/CardEvent';
import { Category } from '@/components/Category';
import { EventCarousel } from '@/components/EventCarousel';
import { Jumbotron } from '@/components/Jumbotron';
import { SearchBar } from '@/components/SearchBar';

const HomePage = () => {
  return (
    <div>
      <section className="w-full">
        <div className="max-h-[600px]">
          <Jumbotron />
        </div>
      </section>
      <section className="flex justify-between w-full max-w-6xl mx-auto ">
        <div className="items-center lg:items-start -mt-8">
          <SearchBar />
        </div>
        <div className="items-center lg:items-start -mt-12">
          <Category />
        </div>
      </section>
      <section className="w-full max-w-6xl mx-auto">
        <div className="h-[530px] max-h-[550px]  max-w-6xl mx-auto mt-8 items-center lg:items-start">
          <div className="flex justify-between px-4 py-2 pb-4 items-center">
            <h1 className="font-semibold text-2xl">Recently Added</h1>
            <h1 className="font-semibold">Explore</h1>
          </div>
          <div className="container max-w-6xl flex gap-3 px-3 ">
            <CardEvent />
            <CardEvent />
            <CardEvent />
            <CardEvent />
          </div>
        </div>
      </section>
      <section className="w-full mx-auto">
        <EventCarousel />
      </section>
      <section className=" container h-[500px] max-h-[550px]  max-w-6xl mx-auto mt-4">
        <div className="flex justify-between px-4 py-2 pb-4 items-center">
          <h1 className="font-semibold text-2xl">Religi</h1>
          <h1 className="font-semibold">Explore</h1>
        </div>
        <div className="container max-w-6xl flex gap-3 px-3 ">
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </div>
      </section>
      <section className=" container h-[500px] max-h-[550px]  max-w-6xl mx-auto mt-8">
        <div className="flex justify-between px-4 py-2 pb-4 items-center">
          <h1 className="font-semibold text-2xl">Music & Concert</h1>
          <h1 className="font-semibold">Explore</h1>
        </div>
        <div className="container max-w-6xl flex gap-3 px-3 ">
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </div>
      </section>
      <section className=" container h-[500px] max-h-[550px]  max-w-6xl mx-auto mt-8">
        <div className="flex justify-between px-4 py-2 pb-4 items-center">
          <h1 className="font-semibold text-2xl">More Event</h1>
          <h1 className="font-semibold">Explore</h1>
        </div>
        <div className="container max-w-6xl flex gap-3 px-3 ">
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
