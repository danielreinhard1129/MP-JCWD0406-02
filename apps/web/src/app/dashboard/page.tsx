'use client';
import Card from '@/components/dashboard/Card';
import Chart from '@/components/dashboard/Chart';
import Transactions from '@/components/dashboard/Transactions';
import axios from 'axios';
import { useEffect, useState } from 'react';
import isAuth from '@/components/isAuth';

interface Total {
  total: number;
}

interface Sum {
  _sum: Total;
}

interface Data {
  filterByweek: Sum;
  filterByMonth: Sum;
  filterByYear: Sum;
}

const Dashboard = () => {
  const baseUrl = 'http://localhost:8000/api';
  const [revenue, setRevenue] = useState<Data>();

  const totalRevenue = async () => {
    const { data } = await axios.get(baseUrl + '/transactions/bydate');
    setRevenue(data.data);
  };

  useEffect(() => {
    totalRevenue();
  }, []);

  return (
    <div className="flex gap-[20px] mt-[20px]">
      <div className="w-full px-[50px] flex flex-3 flex-col gap-[20px]">
        <div className="flex gap-[20px] justify-between">
          <Card
            range={'week'}
            revenue={revenue?.filterByweek._sum.total}
            improve={12}
          />
          <Card
            range={'month'}
            revenue={revenue?.filterByMonth._sum.total}
            improve={6}
          />
          <Card
            range={'year'}
            revenue={revenue?.filterByYear._sum.total}
            improve={3}
          />
        </div>
        <Transactions />
        <Chart revenue={revenue} />
      </div>
    </div>
  );
};

export default isAuth(Dashboard);
