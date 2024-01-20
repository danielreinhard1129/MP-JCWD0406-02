import { Button, Card, Kbd } from 'flowbite-react';
import { TicketCategory } from './TicketCategory';
import { Voucher } from '../../../components/Voucher';
import { Transaction } from '../../../components/Transaction';

export const LayoutCardCart = () => {
  return (
    <>
      <div className="w-full h-[600px] px-3">
        <Card className="px-2 rounded-3xl">
          <h1 className="font-bold text-xl text-center">Choose Your Ticket</h1>
          <hr />
          <TicketCategory />
          <TicketCategory />
        </Card>
        <Card className="px-2 rounded-3xl mt-2">
          <h1 className="font-bold text-lg">Total Ticket</h1>
          <hr />
          <Transaction />
        </Card>
        <div className="flex justify-around mt-3">
          <Button size="lg" className="w-[300px] rounded-2xl">
            Checkout
          </Button>
        </div>
      </div>
    </>
  );
};
