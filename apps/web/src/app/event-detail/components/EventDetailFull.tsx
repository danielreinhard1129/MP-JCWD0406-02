'use client';

import { LayoutCardCart } from '@/app/event-detail/components/LayoutCardCart';
import { EventCarousel } from '@/app/home/components/EventCarousel';
import { EventDescription } from '@/app/event-detail/components/EventDescription';
import { EventDetailHeader } from '@/app/event-detail/components/EventDetailHeader';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TestAccordion } from './TestAccordion';

interface IEvent {
  id: number;
  title: string;
  description: string;
  locationId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  limit: number;
  booked: number;
  thumbnail: string;
  userId: number;
  createdAt: Date;
  updateAt: Date;
}
const EventDetailFull: React.FC = () => {
  const [eventById, setEventById] = useState<IEvent | null>(null); // Specify the type for eventById
  const baseUrl = 'http://localhost:8000/api';

  // const getEventId = async () => {
  //   try {
  //     const response = await axios.get<{ data: IEvent }>(
  //       `${baseUrl}/events/event-detail/${params.id}`,
  //     );
  //     console.log('Response data:', response.data.data);
  //     setEventById(response.data.data);
  //   } catch (error) {
  //     console.error('Error fetching event:', error);
  //   }
  // };

  // useEffect(() => {
  //   getEventId();
  // }, [params.id]);
  return (
    <div className="md:grid md:grid-cols-3 gap-4 w-full container max-w-6xl md:mx-auto px-2 mt-4">
      <div className="col-span-2 py-3 px-2">
        {/* EVENT HEADER */}
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
            Event Kejar Tangkap Pantat Gemoy
          </h1>
          <a href="#" className="flex gap-2 mt-1 items-center">
            <h5 className="text-md font-normal tracking-tight text-gray-900 dark:text-white">
              Hosted by :
            </h5>
            <h5 className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
              BINAL Community
            </h5>
          </a>
        </div>
        {/* TUMBNAIL */}
        <div className="mt-5">
          <EventCarousel />
        </div>
        {/* DESKRIPSI */}
        <div className="py-3">
          <div>
            <div>
              <h1 className="text-xl font-bold">More About</h1>
              <h2 className="text-lg mt-2 text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore nam labore eum tempore, quo dolor. Quod, architecto ut
                adipisci excepturi nam sed similique! Ullam qui a labore,
                tempora nisi possimus odit dolorum deleniti consequuntur maxime
                rem quia sapiente laborum illo eos ex architecto sequi
                laboriosam quis porro unde totam? Id reiciendis enim, ipsum qui
                necessitatibus distinctio. Voluptate ad, vitae numquam eos ipsa
                exercitationem culpa harum quisquam est aliquid velit at labore
                repellendus. Quae hic ad a eos animi, mollitia at nam beatae,
                quibusdam inventore ullam cumque aspernatur. Id, quae? Eligendi,
                necessitatibus? Totam cumque ipsam, repellat repellendus quae
                quas dolorum et ea iste commodi dolores! Maiores labore, dolorum
                tempore dignissimos saepe nam! Dicta, sint, et nisi asperiores
                quasi in est, ex voluptates iste esse natus aliquam. Tempore
                quos quam nihil expedita hic debitis magni. Voluptate vel
                eveniet qui voluptatibus necessitatibus earum dignissimos quae
                placeat illo eos consectetur, laboriosam totam ducimus, iusto
                ad, nobis numquam tempore magni impedit sunt! Minus consequatur
                autem culpa, maiores accusamus magni neque molestiae reiciendis
                vel omnis veniam fugit, animi ipsum libero sequi tenetur laborum
                veritatis recusandae repellat, non cupiditate iure nobis!
                Praesentium quod velit et minus esse iure consequuntur fugiat
                officia sint pariatur. Aspernatur ipsum quidem corporis.{' '}
              </h2>
              <hr className="my-3 " />
            </div>

            <div>
              <h1 className="text-xl font-bold">Date & Time</h1>
              <h1 className="text-lg"> 22 January 2024</h1>
              <hr className="my-3" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Location</h1>
              <h1 className="text-lg ">Pantai Nongsa Batam</h1>
              <hr className="my-3" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Tags</h1>
              <hr className="my-3" />
            </div>
          </div>
        </div>
      </div>

      {/* grid untuk CardCheckout */}
      <div className="hidden md:block md:sticky md:top-10 h-fit mt-5">
        <LayoutCardCart />
      </div>
      <div className="sticky bottom-1  md:sticky md:hidden h-fit mt-5">
        <TestAccordion />
      </div>
    </div>
  );
};

export default EventDetailFull;
