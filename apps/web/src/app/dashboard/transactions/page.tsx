/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
'use client';

import { Button, Modal } from 'flowbite-react';
import { useEffect, useState } from 'react';
import Pagination from '@/components/dashboard/Pagination';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Image from 'next/image';
import { useAppSelector } from '@/lib/hooks';
import axios from 'axios';
import isAuth from '@/components/isAuth';

interface Status {
  id: number;
  title: string;
  createdAt: Date;
}

interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  isActive: boolean;
  profile_picture: string;
  contact: number;
  address: string;
  referral_number: string;
  updatedAt: Date;
  createdAt: Date;
  roleId: number;
}

interface Transaction {
  id: number;
  uuid: string;
  userId: number;
  eventId: number;
  statusId: number;
  qty: number;
  paymentProof: string;
  total: number;
  createdAt: Date;
  updatedAt: Date;
  user: User;

  status: Status;
}

interface Event {
  id: number;
  title: string;
  description: string;
  locationId: number;
  startDate: Date;
  endDate: Date;
  price: number;
  limit: number;
  booked: number;
  thumbnail: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  transaction: Transaction[];
}

interface Data {
  uuid: string;
  email: string;
  eventId: number;
  qty: number;
}

const transactions = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openFailed, setOpenFailed] = useState(false);
  const [openAccept, setOpenAccept] = useState(false);
  const [transactions, setTransactions] = useState<Array<Event>>([]);
  const baseUrl = 'http://localhost:8000/api';
  const user = useAppSelector((state) => state.user);

  function onCloseModal() {
    setOpenModal(false);
  }

  const listEvent = async () => {
    try {
      if (user.id && user) {
        const { data } = await axios.post(baseUrl + '/transactions/userId', {
          userId: user.id,
        });
        setTransactions(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuccess = async (uuid: string, email: string) => {
    try {
      await axios.patch(baseUrl + '/transactions/success', {
        uuid,
        statusId: 2,
        email,
      });
      setOpenAccept(false);
      setTrans({
        uuid: '',
        email: '',
        eventId: 0,
        qty: 0,
      });
      console.log('step', uuid, email);
      listEvent();
    } catch (error) {
      console.log(error);
    }
  };

  const handleFailed = async (
    uuid: string,
    email: string,
    eventId: number,
    qty: number,
  ) => {
    try {
      await axios.patch(baseUrl + '/transactions/failed', {
        uuid,
        statusId: 3,
        email,
        eventId,
        qty,
      });
      setOpenFailed(false);
      setTrans({
        uuid: '',
        email: '',
        eventId: 0,
        qty: 0,
      });
      listEvent();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listEvent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  const [trans, setTrans] = useState<Data>({
    uuid: '',
    email: '',
    eventId: 0,
    qty: 0,
  });

  console.log('transss', trans);

  return (
    <div className="bg-[#182237] p-[20px] rounded-[10px] mt-[20px]">
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="flex justify-center items-start">
            <img
              src="https://res-console.cloudinary.com/di2tpq1iy/thumbnails/v1/image/upload/v1705977319/YnVrdGlfcGVtYmF5YXJhbl9zcHNrMTM=/preview"
              alt="payment"
            />
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={openFailed}
        size="md"
        onClose={() => setOpenFailed(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to reject this transaction?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() =>
                  handleFailed(
                    trans?.uuid,
                    trans?.email,
                    trans.eventId,
                    trans.qty,
                  )
                }
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenFailed(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={openAccept}
        size="md"
        onClose={() => setOpenAccept(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to Accept this transaction?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                color="failure"
                onClick={() => handleSuccess(trans?.uuid, trans?.email)}
              >
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenAccept(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <table className="w-full">
        <thead>
          <tr>
            <td>Name</td>
            <td>Ticket</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => {
            const date = new Date(`${item.transaction[0]?.createdAt}`);
            const formatDate = date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const monthName = formatDate.split(',')[0];
            let createdAt = `${date.getFullYear()} ${monthName}`;

            return (
              <tr key={item.id}>
                <td className="h-16">
                  <div className="flex gap-[10px] items-center">
                    <div>
                      <Image
                        src="/noAvatar.png"
                        alt=""
                        width="40"
                        height="40"
                        className="object-cover rounded-full"
                      />
                    </div>
                    {item.transaction[0]?.user.name}
                  </div>
                </td>
                <td>{item.title}</td>
                <td>
                  <span
                    className={`rounded-lg p-2 text-[14px] text-white ${
                      item.transaction[0]?.status.title == 'success'
                        ? 'bg-[#afd6ee75]'
                        : item.transaction[0]?.status.title == 'failed'
                          ? 'bg-[#f7737375]'
                          : 'bg-[#f7cb7375]'
                    }`}
                  >
                    {item.transaction[0]?.status.title}
                  </span>
                </td>
                <td>{createdAt}</td>
                <td>${item.transaction[0]?.total}</td>
                <td>
                  <div className="flex gap-[10px]">
                    <button
                      onClick={() => setOpenModal(true)}
                      className="py-[4px] px-[6px] text-white border-none cursor-pointer bg-[#f7cb7375] rounded-lg"
                    >
                      detail
                    </button>
                    <button
                      onClick={() => {
                        setTrans({
                          uuid: item.transaction[0]?.uuid,
                          email: item.transaction[0]?.user.email,
                          eventId: 0,
                          qty: 0,
                        });
                        setOpenAccept(true);
                      }}
                      className="py-[4px] px-[6px] text-white border-none cursor-pointer bg-[teal] rounded-lg"
                    >
                      success
                    </button>
                    <button
                      onClick={() => {
                        setTrans({
                          uuid: item.transaction[0]?.uuid,
                          email: item.transaction[0]?.user.email,
                          eventId: item.id,
                          qty: item.transaction[0]?.qty,
                        });
                        setOpenFailed(true);
                      }}
                      className="py-[4px] px-[6px] text-white border-none cursor-pointer bg-[crimson] rounded-lg"
                    >
                      cancelled
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default isAuth(transactions);
