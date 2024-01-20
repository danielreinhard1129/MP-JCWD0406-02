import { LayoutCardCart } from '@/app/event-detail/components/LayoutCardCart';
import { CardEvent } from '@/app/home/components/CardEvent';
import { Category } from '@/app/home/components/Category';
import { EventCarousel } from '@/app/home/components/EventCarousel';
import { EventDescription } from '@/app/event-detail/components/EventDescription';
import { EventDetailHeader } from '@/app/event-detail/components/EventDetailHeader';
import { Jumbotron } from '@/app/home/components/Jumbotron';
import { SearchBar } from '@/components/SearchBar';

const EventDetail = () => {
  return (
    <section className="container max-w-6xl mx-auto mt-4 h-[3000px]">
      <div className="grid grid-cols-3 gap-4 w-full container max-w-6xl mx-auto mt-4">
        <div className="col-span-2 py-3 px-2">
          <EventDetailHeader />
          <div className="mt-5">
            <EventCarousel />
          </div>
          <div className="py-3">
            <EventDescription />
          </div>
        </div>

        {/* grid untuk CardCheckout */}
        <div className="sticky top-2 h-[1000px] max-h-[1000px] mt-5">
          <LayoutCardCart />
        </div>
      </div>
    </section>
  );
};

export default EventDetail;
