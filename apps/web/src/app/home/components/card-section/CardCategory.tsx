import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardEvent } from '../CardEvent';

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

export const CardEventByCategory = ({ category }: { category: string }) => {
  const [eventsByCategory, setEventsByCategory] = useState<IEvent[]>([]);
  const baseUrl = 'http://localhost:8000/api';

  const getEventsByCategory = async () => {
    try {
      const response = await axios.get<{ data: IEvent[] }>(
        `${baseUrl}/events/filter/category?category=${category}`,
      );
      setEventsByCategory(response.data.data);
    } catch (error) {
      console.error(`Error fetching events for category ${category}:`, error);
    }
  };

  useEffect(() => {
    getEventsByCategory();
  }, []);

  return (
    <div>
      {eventsByCategory.map((data) => (
        <CardEvent key={data.id} data={data}></CardEvent>
      ))}
    </div>
  );
};
