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
  createAt: Date;
  updateAt: Date;
}

export const CardRandomEvent = () => {
  const [randomEvents, setRandomEvents] = useState<IEvent[]>([]);
  const baseUrl = 'http://localhost:8000/api';

  const getRandomEvents = async () => {
    try {
      const response = await axios.get<{ data: IEvent[] }>(
        `${baseUrl}/events/random-events`,
      );
      setRandomEvents(response.data.data);
    } catch (error) {
      console.error('Error fetching random events:', error);
    }
  };

  useEffect(() => {
    getRandomEvents();
  }, []);

  return (
    <div className="container flex flex-wrap gap-6">
      {randomEvents.map((data) => (
        <CardEvent key={data.id} data={data} />
      ))}
    </div>
  );
};
