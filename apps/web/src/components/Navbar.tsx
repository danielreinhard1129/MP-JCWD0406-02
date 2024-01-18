/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { loginAction, logoutAction } from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const Navbar = () => {
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  const dispacth = useAppDispatch();
  const baseUrl = 'http://localhost:8000/api';

  const handleLogout = () => {
    localStorage.removeItem('token_auth');
    dispacth(logoutAction());
    router.push('/');
  };

  useEffect(() => {
    const token = localStorage.getItem('token_auth');

    const keepLogin = async () => {
      try {
        const { data } = await axios.get(baseUrl + '/users/keeplogin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispacth(loginAction(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    keepLogin();
  }, []);

  return (
    <div className="flex justify-end mr-[54px] py-5 gap-5">
      {user.id ? (
        <>
          <button
            type="button"
            onClick={() => router.push(`/profile-user/${user.id}`)}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Profile
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Logout
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={() => router.push('/login')}
          className="focus:outline-none text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Navbar;
