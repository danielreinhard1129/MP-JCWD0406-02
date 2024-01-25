/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Pagination from '@/components/dashboard/Pagination';
import { useAppSelector } from '@/lib/hooks';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import isAuth from '@/components/isAuth';

interface Event {
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
  updatedAt: Date;
}

const Event = () => {
  const baseUrl = 'http://localhost:8000/api';
  const user = useAppSelector((state) => state.user);
  const [events, setEvents] = useState<Array<Event>>([]);

  const listEvent = async () => {
    try {
      if (user.id && user) {
        const { data } = await axios.post(baseUrl + '/events/filter/userId', {
          userId: user.id,
        });
        setEvents(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listEvent();
  }, [user.id]);

  console.log('ini adalah events', events);

  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px] mt-[20px]">
      <table className="w-full">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
          </tr>
        </thead>
        <tbody>
          {events.map((item) => {
            const date = new Date(`${item.createdAt}`);
            const formatDate = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const monthName = formatDate.split(',')[0];
            let createdAt = `${date.getFullYear()} ${monthName}`;
            return (
              <tr key={item.id}>
                <td className="h-16">
                  <div className="flex gap-[10px] items-center">
                    <Image
                      src="/noProduct.jpg"
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full object-cover"
                    />
                    {item.title}
                  </div>
                </td>
                <td>{item.description}</td>
                <td>${item.price}</td>
                <td>{createdAt}</td>
                <td>{item.limit}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default isAuth(Event);
