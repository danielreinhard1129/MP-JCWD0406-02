'use client';

import { Button, Card, Kbd } from 'flowbite-react';
import { useState } from 'react';

export const LayoutCardCart = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 0));
  };

  return (
    <>
      <div className="w-full h-fit md:px-3">
        <Card className="md:px-2 rounded-3xl">
          <h1 className="font-bold text-xl text-center">Choose Your Ticket</h1>
          <hr />
          <div>
            <h1 className="md:font-bold md:text-xl font-semibold text-lg">
              Platinum VIP
            </h1>
            <h1 className="md:text-sm mb-2 text-xs">
              Lorem ipsum dolor sit amet.
            </h1>
            <h1 className="text-xs">Price</h1>
            <div className="flex justify-between">
              <h1 className="md:font-bold md:text-xl text-lg font-bold">
                Rp. 500.000
              </h1>
              <div className="flex flex-wrap gap-2">
                <Button size="xs" onClick={handleDecrement}>
                  -
                </Button>
                <Kbd className="text-bold">{quantity}</Kbd>
                <Button size="xs" onClick={handleIncrement}>
                  +
                </Button>
              </div>
            </div>
          </div>
        </Card>
        <Card className="md:px-2 rounded-3xl mt-2">
          <h1 className="md:font-bold md:text-lg font-semibold text-md">
            Total Ticket
          </h1>
          <hr />
          <div className="flex justify-between">
            <h1 className="md:font-semibold md:text-xl font-semibold text-md">
              Total
            </h1>
            <h1 className="font-bold md:text-xl text-lg">
              {quantity * 500000}
            </h1>
          </div>
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
