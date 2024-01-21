import Card from '@/components/dashboard/Card';
import Chart from '@/components/dashboard/Chart';
import Transactions from '@/components/dashboard/Transactions';

const dataRevenue = [
  {
    range: "week",
    revenue: 12200,
    improve: 21
  },
  {
    range: "month",
    revenue: 51200,
    improve: 32
  },
  {
    range: "year",
    revenue: 116200,
    improve: 16
  }
]

const revenueWeekly = [
  {
    name: "Week 1",
    revenue: 10000,
    sales: 20000
  },
  {
    name: "Week 2",
    revenue: 8100,
    sales: 15500
  },
  {
    name: "Week 3",
    revenue: 15000,
    sales: 17200
  },
  {
    name: "Week 4",
    revenue: 12200,
    sales: 26120
  }
]

const revenueMonthly = [
  {
    name: "Jan",
    revenue: 40200,
    sales: 60210
  },
  {
    name: "Feb",
    revenue: 39200,
    sales: 58110
  },
  {
    name: "Mar",
    revenue: 43200,
    sales: 64210
  },
  {
    name: "Apr",
    revenue: 47200,
    sales: 70121
  },
  {
    name: "May",
    revenue: 44100,
    sales: 68121
  },
  {
    name: "Jun",
    revenue: 49100,
    sales: 72121
  },
  {
    name: "Jul",
    revenue: 52100,
    sales: 73521
  },
  {
    name: "Aug",
    revenue: 47100,
    sales: 67121
  },
  {
    name: "Sep",
    revenue: 43100,
    sales: 63121
  },
  {
    name: "Oct",
    revenue: 46100,
    sales: 67221
  },
  {
    name: "Nov",
    revenue: 48100,
    sales: 69211
  },
  {
    name: "Dec",
    revenue: 51200,
    sales: 74211
  },
]

const revenueYear = [
  {
    name: "Year 1",
    revenue: 107200,
    sales: 140200
  },
  {
    name: "Year 2",
    revenue: 100200,
    sales: 134210
  },
  {
    name: "Year 3",
    revenue: 109220,
    sales: 145420
  },
  {
    name: "Year 4",
    revenue: 109220,
    sales: 142720
  },
  {
    name: "Year 5",
    revenue: 116200,
    sales: 170211
  },
]

const Dashboard = () => {
  return (
    <div className='flex gap-[20px] mt-[20px]'>
      <div className='w-full px-[50px] flex flex-3 flex-col gap-[20px]'>
        <div className='flex gap-[20px] justify-between'>
          {dataRevenue.map((item) => (
            <div key={item.range}>
              <Card range={item.range} revenue={item.revenue} improve={item.improve}/>
            </div>
          ))}
        </div>
        <Transactions/>
        <Chart range={"Weekly"} data={revenueWeekly} />
        <Chart range={"Monthly"} data={revenueMonthly}/>
        <Chart range={"Yearly"} data={revenueYear}/>
      </div>
    </div>
  );
};

export default Dashboard;
