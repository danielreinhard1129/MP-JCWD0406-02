'use client';
import { useAppSelector } from '@/lib/hooks';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Status {
  id: number;
  title: string;
  createdAt: Date;
}

interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  isActive: boolean;
  profile_picture: string;
  contact: number;
  address: string;
  referral_number: string;
  updatedAt: Date;
  createdAt: Date;
  roleId: number;
}

interface Transaction {
  id: number;
  uuid: string;
  userId: number;
  eventId: number;
  statusId: number;
  qty: number;
  paymentProof: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;
  status: Status;
}

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
  transaction: Transaction[];
}

const Transactions = () => {
  const [transactions, setTransactions] = useState<Array<Event>>([]);
  const baseUrl = 'http://localhost:8000/api';
  const user = useAppSelector((state) => state.user);

  const listEvent = async () => {
    try {
      if (user.id && user) {
        const { data } = await axios.post(baseUrl + '/transactions/userId', {
          userId: user.id,
        });
        setTransactions(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px]">
      <h2 className="mb-[20px] font-[200] text-[#b7bac1] text-xl">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => {
            const date = new Date(`${item.transaction[0]?.createdAt}`);
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
                    <div>
                      <Image
                        src="/noAvatar.png"
                        alt=""
                        width="40"
                        height="40"
                        className="object-cover rounded-full"
                      />
                    </div>
                    {item.transaction[0]?.user.name}
                  </div>
                </td>
                <td>
                  <span
                    className={`rounded-lg p-2 text-[14px] text-white ${
                      item.transaction[0]?.status.title == 'success'
                        ? 'bg-[#afd6ee75]'
                        : item.transaction[0]?.status.title == 'failed'
                          ? 'bg-[#f7737375]'
                          : 'bg-[#f7cb7375]'
                    } `}
                  >
                    {item.transaction[0]?.status.title}
                  </span>
                </td>
                <td>{createdAt}</td>
                <td>${item.transaction[0]?.total}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
