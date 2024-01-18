'use client';

import {
  Button,
  Card,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Select,
} from 'flowbite-react';
import { TicketCategory } from './TicketCategory';
import { Transaction } from './Transaction';
import { useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';

const TransactionCard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="w-full px-3 h-fit flex justify-center gap-10">
        <div>
          <Card className="px-2 rounded-3xl">
            <h1 className="font-bold text-2xl text-center">Checkout</h1>
            <hr />
            <div>
              <div className=" ">
                <h1 className="font-bold text-xl">Togar Siregar</h1>
                <h1 className="font-normal text-lg">togar.siregar@gmail.com</h1>
                <h1 className="font-normal text-lg">+62 85669913450</h1>
                <hr className=" my-3" />
              </div>
              <div className=" ">
                <h1 className="font-bold text-2xl py-5">
                  Event Kejar Tangkap Pantat Gemoy
                </h1>
                <hr className=" my-3" />
              </div>
              <div className="flex justify-between">
                <h1 className="font-bold text-lg">Platinum VIP</h1>
                <h1 className="font-bold text-lg">Rp. 500.000</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-normal text-md">Qty</h1>
                <h1 className="font-normal text-md">3</h1>
              </div>
            </div>

            <Card className="px-2 rounded-3xl">
              <div className="flex justify-between">
                <h1 className="font-normal text-lg">Voucher</h1>
                <h1 className="font-semibold text-lg  text-red-600">10%</h1>
              </div>
            </Card>
            <Card className="px-2 rounded-3xl">
              <div className="flex justify-between">
                <h1 className="font-normal text-lg">Discount</h1>
                <h1 className="font-semibold text-lg text-red-600">
                  Rp. 10.000
                </h1>
              </div>
            </Card>

            <Card className="px-2 rounded-3xl">
              <div className="flex justify-between">
                <h1 className="font-normal text-lg">Point</h1>
                <h1 className="font-semibold text-xl">20.000</h1>
              </div>
            </Card>
          </Card>
        </div>
        <div>
          <Card className="px-2 rounded-3xl mt-4">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-lg">Payment Methode</h1>
              <h1 className="font-semibold text-lg">
                <div className="max-w-md w-40">
                  <Select id="payment" required>
                    <option>Bank Transfer</option>
                    <option>Virtual Account</option>
                    <option>Credit/Debit Card</option>
                    <option>On The Spot</option>
                    <option>Cicilan 0% 25 Tahun</option>
                  </Select>
                </div>
              </h1>
            </div>
          </Card>

          <Card className="px-2 rounded-3xl mt-4">
            <h1 className="font-bold text-lg">Payment Detail</h1>
            <hr />
            <div>
              <div className="flex justify-between">
                <h1 className="font-medium text-md">Subtotal Ticket</h1>
                <h1 className="font-semibold text-md">1.500.000</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-medium text-md">Voucher</h1>
                <h1 className="font-semibold text-md">-200.000</h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-medium text-md">Point</h1>
                <h1 className="font-semibold text-md">-50.000</h1>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Total Payment</h1>
              <h1 className="font-bold text-xl text-red-600">Rp1.250.000</h1>
            </div>
          </Card>
          <div className="flex justify-around mt-6 gap-3">
            <Button
              onClick={() => setOpenModal(true)}
              size="lg"
              className="w-[200px] rounded-2xl"
              color="teal"
            >
              Cancel
            </Button>
            <Modal
              show={openModal}
              size="md"
              onClose={() => setOpenModal(false)}
              popup
            >
              <ModalHeader />
              <ModalBody>
                <div className="text-center">
                  <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                  <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                    Are you sure you want to cancel?
                  </h3>
                  <div className="flex justify-center gap-4">
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                      {"Yes, I'm sure"}
                    </Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                      Back
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </Modal>
            <Button size="lg" className="w-[200px] rounded-2xl">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionCard;
