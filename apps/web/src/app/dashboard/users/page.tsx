'use client';
import Pagination from '@/components/dashboard/Pagination';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface UserData {
  id: number;
  username: string;
  fullName: string;
  email: string;
  profile_picture: string;
  contact: string;
  address: string;
  point: string;
  referral_number: string;
  createAt: Date;
  updateAt: Date;
  roleId: number;
}

const UserRegister = () => {
  const baseUrl = 'http://localhost:8000/api';
  const [userData, setUserData] = useState<Array<UserData>>([]);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(baseUrl + `/users`);
      setUserData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log('dataaaaaaaaa', userData);

  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px] mt-[20px]">
      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((item: any) => {
            const inputDate = new Date(`${item.createdAt}`)

            const year = inputDate.getFullYear();
            const month = String(inputDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(inputDate.getDate()).padStart(2, '0');
            const createdAt = `${year}-${month}-${day}`
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
                    {item.fullName}
                  </div>
                </td>
                <td>{item.email}</td>
                <td>{createdAt}</td>
                <td>{item.role.role}</td>
                <td>active</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UserRegister;
