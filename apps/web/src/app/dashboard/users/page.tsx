/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Pagination from '@/components/dashboard/Pagination';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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

const UserRegister = () => {
  const baseUrl = 'http://localhost:8000/api';
  const [events, setEvents] = useState<Array<Event>>([]);
  const [event, setEvent] = useState([]);
  const [selectEvent, setSelectEvent] = useState('');

  const getEventByTitle = async () => {
    try {
      if (selectEvent) {
        const { data } = await axios.post(baseUrl + '/events/filter/title', {
          title: selectEvent,
        });
        setEvent(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getEvent = async () => {
    try {
      const { data } = await axios.get(baseUrl + '/events');
      setEvents(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvent();
  }, []);

  useEffect(() => {
    getEventByTitle();
  }, [selectEvent]);

  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px] mt-[20px]">
      <div className="relative z-0 mb-6 w-[230px] group mt-5">
        <select
          name="Event"
          defaultChecked
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
          onChange={(e) => setSelectEvent(e.target.value)}
        >
          <option value="" selected disabled hidden>
            Choose here
          </option>
          {events.map((item) => (
            <option key={item.id} value={item.title}>
              {item.title}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Contact</td>
          </tr>
        </thead>
        <tbody>
          {event.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center py-5 border-[0.2px] white">
                No data
              </td>
            </tr>
          ) : (
            event.map((item: any) => {
              const date = new Date(`${item.user.createdAt}`);
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
                        src="/noAvatar.png"
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      {item.user.name}
                    </div>
                  </td>
                  <td>{item.user.email}</td>
                  <td>{createdAt}</td>
                  <td>{item.user.contact}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default isAuth(UserRegister);
