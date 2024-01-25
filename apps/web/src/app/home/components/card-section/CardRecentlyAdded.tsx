import { useEffect, useState } from 'react';
import { CardEvent } from '../CardEvent';
import axios from 'axios';

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
  createAt: Date;
  updateAt: Date;
}

export const CardRecentlyAddedEvent = () => {
  const [recentlyAddedEvents, setRecentlyAddedEvents] = useState<IEvent[]>([]);
  const baseUrl = 'http://localhost:8000/api';
  console.log('data recently added events', recentlyAddedEvents);

  const getRecentlyAddedEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/events/recently-added`);
      setRecentlyAddedEvents(response.data.data);
    } catch (error) {
      console.error('error fetching recently added events:', error);
    }
  };

  useEffect(() => {
    getRecentlyAddedEvents();
  }, []);

  return (
    <div className="container flex flex-wrap gap-6">
      {recentlyAddedEvents.slice(0, 4).map((data) => (
        <CardEvent key={data.id} data={data} />
      ))}
    </div>
  );
};
