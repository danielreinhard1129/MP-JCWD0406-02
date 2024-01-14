'use client';
import Navbar from '@/components/Navbar';
import { useAppSelector } from '@/lib/hooks';

export default function Home() {
  const user = useAppSelector((state) => state.user);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-bold text-2xl">hello {user.fullName}</h1>
      </div>
    </div>
  );
}
