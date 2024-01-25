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

export const CardEventById = ({ id }: { id: number }) => {
  const [EventById, setEventById] = useState<IEvent[]>([]);
  const baseUrl = 'http://localhost:8000/api';

  const getEventById = async () => {
    try {
      const response = await axios.get<IEvent[]>(`${baseUrl}/events/${id}`);
      setEventById(response.data);
    } catch (error) {
      console.error(`Error fetching event with ID ${id}:`, error);
    }
  };

  useEffect(() => {
    getEventById();
  }, [id]);

  return (
    <div className="container flex flex-wrap gap-6">
      {EventById.map((data) => (
        <CardEvent key={data.id} data={data} />
      ))}
    </div>
  );
};
