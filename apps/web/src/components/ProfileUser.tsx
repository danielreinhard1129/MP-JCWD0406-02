'use client';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import isAuth from '@/components/isAuth';

interface Reward {
  id: number;
  nameReward: string;
  persentase: number;
  createdAt: Date;
  updatedAt: Date;
}

interface UserReward {
  id: number;
  userId: number;
  rewardId: number;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  reward: Reward;
}

interface Voucher {
  id: number;
  nameVoucher: string;
  persentase: number;
  createdAt: Date;
  updatedAt: Date;
}

interface UserVoucher {
  id: number;
  userId: number;
  voucherId: number;
  createdAt: Date;
  updatedAt: Date;
  voucher: Voucher;
}

interface Point_balance {
  id: number;
  point_balance: number;
  userId: number;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface Role {
  id: number;
  role: string;
}

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
  createdAt: Date;
  updatedAt: Date;
  roleId: number;
  role: Role;
  userReward: UserReward[];
  point_balance: Point_balance[];
  userVoucher: UserVoucher[];
}

const ProfileUser = () => {
  const baseUrl = 'http://localhost:8000/api';
  const { id } = useParams();
  const [userData, setUserData] = useState<UserData>();

  const getDataUser = async () => {
    try {
      const { data } = await axios.get(baseUrl + `/users/profile-user/${id}`);
      setUserData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="px-3 py-3 lg:px-5 lg:pl-3 mx-20">
        <div className="flex items-center justify-center">
          <h1 className="font-semibold text-xl py-3">Information Profile</h1>
        </div>
      </div>
      <div className="mx-5 sm:mx-20">
        <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
          <div className="flex flex-col items-center py-10">
            <div className="relative w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <svg
                className="absolute w-22 h-22 text-gray-400 -left-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {userData?.email}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {userData?.role.role}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="p-8 border-x-[1px]">
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                value={userData?.email}
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                name
              </label>
              <input
                type="text"
                value={userData?.fullName}
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact
              </label>
              <input
                type="text"
                value={userData?.contact}
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address
              </label>
              <input
                type="text"
                value={userData?.address}
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="p-8 border-r-[1px]">
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Referral Number
              </label>
              <input
                type="text"
                value={userData?.referral_number}
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Point
              </label>
              <input
                type="text"
                value={userData?.point_balance[0]?.point_balance}
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Voucher
              </label>
              <input
                type="text"
                value={userData?.userVoucher[0]?.voucher.nameVoucher}
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="base-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Reward
              </label>
              <input
                type="text"
                value={userData?.userReward[0]?.reward.persentase}
                id="base-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default isAuth(ProfileUser);
