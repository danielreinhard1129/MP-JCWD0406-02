import TransactionCard from '@/app/transactions/components/TransactionCard';
import { Card } from 'flowbite-react';

const TransactionPage = () => {
  return (
    <section className="max-w-6xl mx-auto">
      <div>
        <TransactionCard />
      </div>
    </section>
  );
};

export default TransactionPage;
