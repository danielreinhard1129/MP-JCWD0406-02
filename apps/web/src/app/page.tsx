'use client';
import { logoutAction } from '@/lib/features/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';

export default function Home() {
  const dispacth = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token_auth');
    dispacth(logoutAction());
  };

  return (
    <div>
      <div className="flex justify-end mr-[54px] py-5">
        {user.id ? (
          <>
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
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-bold text-2xl">hello {user.fullName}</h1>
      </div>
    </div>
  );
}
