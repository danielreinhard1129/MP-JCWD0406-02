import { Kbd } from 'flowbite-react';

export const TicketCategory = () => {
  return (
    <>
      <div>
        <h1 className="font-bold text-xl">Platinum VIP</h1>
        <h1 className="text-sm mb-2">Lorem ipsum dolor sit amet.</h1>
        <h1 className="text-xs">Harga</h1>
        <div className="flex justify-between">
          <h1 className="font-bold text-xl">Rp. 500.000</h1>
          <div className="flex flex-wrap gap-2">
            <Kbd>-</Kbd>
            <Kbd className="text-bold">1</Kbd>
            <Kbd>+</Kbd>
          </div>
        </div>

        <hr className="my-3" />
      </div>
    </>
  );
};
