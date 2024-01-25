'use client';

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
  createdAt: Date;
  updateAt: Date;
}
export const CardAllEvent = () => {
  const [eventData, setEventData] = useState<IEvent[]>([]);
  const baseUrl = 'http://localhost:8000/api';
  console.log('data event', eventData);

  const getAllEvent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/events`);
      setEventData(response.data.data);
      // console.log('event', response.data.data);
    } catch (error) {
      console.error('error fethcing data:', error);
    }
  };
  useEffect(() => {
    getAllEvent();
  }, []);

  return (
    <div className="container flex flex-wrap gap-6">
      {eventData.map((data) => {
        return <CardEvent key={data.id} data={data} />;
      })}
    </div>
  );
};
