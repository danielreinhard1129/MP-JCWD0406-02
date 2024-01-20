'use client';
import {
  Accordion,
  Button,
  Card,
  Modal,
  ModalBody,
  ModalHeader,
  Select,
} from 'flowbite-react';
import axios, { AxiosError } from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { toast } from 'sonner';

interface Reward {
  id: number;
  nameReward: string;
  persentase: number;
  createAt: Date;
  updateAt: Date;
}

interface UserReward {
  id: number;
  userId: number;
  rewardId: number;
  expiresAt: Date;
  createAt: Date;
  updateAt: Date;
  reward: Reward;
}

interface Voucher {
  id: number;
  nameVoucher: string;
  persentase: number;
  createAt: Date;
  updateAt: Date;
}

interface UserVoucher {
  id: number;
  userId: number;
  voucherId: number;
  createAt: Date;
  updateAt: Date;
  voucher: Voucher;
}

interface Point_balance {
  id: number;
  point_balance: number;
  userId: number;
  expiresAt: Date;
  createAt: Date;
  updateAt: Date;
}

interface UserData {
  id: number;
  username: string;
  fullName: string;
  email: string;
  profile_picture: string;
  contact: string;
  address: string;
  point: string;
  referral_number: string;
  createAt: Date;
  updateAt: Date;
  roleId: number;
  userReward: UserReward[];
  point_balance: Point_balance[];
  userVoucher: UserVoucher[];
}

const Transaction = () => {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const baseUrl = 'http://localhost:8000/api';
  const { id } = useParams();
  const [userData, setUserData] = useState<UserData>();
  const [isvoucher, setIsVoucher] = useState(false);
  const [ispoint, setIsPoint] = useState(false);
  const [isreward, setIsReward] = useState(false);

  const [voucher, setVoucher] = useState(0);
  const [point, setPoint] = useState(0);
  const [reward, setReward] = useState(0);
  const [payment, setPayment] = useState(0);

  const [userVoucherId, setUserVoucherId] = useState(0);
  const [userRewardId, setUserRewardId] = useState(0);

  let totalPoint: any;

  useEffect(() => {
    const calculatedTotalVoucher = (voucher * 1500000) / 100;
    const calculatedTotalReward = (reward * 1500000) / 100;
    const calculatedPayment =
      1500000 - calculatedTotalVoucher - point - calculatedTotalReward;
    setPayment(calculatedPayment);
  }, [voucher, point, reward]);

  const getDataUser = async () => {
    try {
      const { data } = await axios.get(baseUrl + `/users/profile-user/${15}`);
      setUserData(data.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        toast.error(errorMsg);
      }
    }
  };

  useEffect(() => {
    getDataUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  totalPoint = userData?.point_balance.reduce((acc, curr) => {
    return (acc += curr.point_balance);
  }, 0);

  const handleVoucher = async (
    persentase: number,
    voucherId: number,
    nameVoucher: string,
  ) => {
    try {
      setIsVoucher(true);
      setUserVoucherId(voucherId);
      setVoucher(persentase);
      toast.success(`add ${nameVoucher} success`);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        toast.error(errorMsg);
      }
    }
  };

  const handlePoint = async () => {
    try {
      setIsPoint(true);
      setPoint(totalPoint);
      toast.success(`add balance success`);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        toast.error(errorMsg);
      }
    }
  };

  const handleReward = async (
    rewardId: number,
    persentase: number,
    nameReward: string,
  ) => {
    try {
      setIsReward(true);
      setUserRewardId(rewardId);
      setReward(persentase);
      toast.success(`add ${nameReward} success`);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        toast.error(errorMsg);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(baseUrl + '/users/claim-reward', {
        userVoucherId,
        userRewardId,
        pointByUserId: userData?.id,
      });
      toast.success(`transaction success`);
      router.push('/payment');
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        toast.error(errorMsg);
      }
    }
  };

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
            <Accordion>
              <Accordion.Panel>
                <Accordion.Title>Voucher</Accordion.Title>
                <Accordion.Content>
                  {userData?.userVoucher.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mt-2">
                        <p>{item.voucher.nameVoucher}</p>
                        <input
                          type="button"
                          value="Claim"
                          onClick={() =>
                            handleVoucher(
                              item.voucher.persentase,
                              item.voucherId,
                              item.voucher.nameVoucher,
                            )
                          }
                          className={`text-white ${
                            isvoucher ? 'bg-gray-500' : 'bg-gray-800'
                          } hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700`}
                        />
                      </div>
                    </div>
                  ))}
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Point Balance</Accordion.Title>
                <Accordion.Content>
                  <div className="flex justify-between items-center mt-2">
                    <p>
                      Point balance :{' '}
                      {new Intl.NumberFormat('id-ID', {}).format(totalPoint)}
                    </p>
                    <input
                      type="button"
                      onClick={handlePoint}
                      value="Use"
                      className={`text-white ${
                        ispoint ? 'bg-gray-500' : 'bg-gray-800'
                      } hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700`}
                    />
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title>Reward</Accordion.Title>
                <Accordion.Content>
                  {userData?.userReward.map((item) => (
                    <div
                      key={item.id}
                      className="flex justify-between items-center mt-2"
                    >
                      <p>{item.reward.nameReward}</p>
                      <input
                        type="button"
                        onClick={() =>
                          handleReward(
                            item.reward.id,
                            item.reward.persentase,
                            item.reward.nameReward,
                          )
                        }
                        value="Claim"
                        className={`text-white ${
                          isreward ? 'bg-gray-500' : 'bg-gray-800'
                        } hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700`}
                      />
                    </div>
                  ))}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
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
                <h1 className="font-semibold text-md">
                  -
                  {new Intl.NumberFormat('id-ID', {}).format(
                    (voucher * 1500000) / 100,
                  )}
                </h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-medium text-md">Point</h1>
                <h1 className="font-semibold text-md">
                  -{new Intl.NumberFormat('id-ID', {}).format(point)}
                </h1>
              </div>
              <div className="flex justify-between">
                <h1 className="font-medium text-md">Reward</h1>
                <h1 className="font-semibold text-md">
                  -
                  {new Intl.NumberFormat('id-ID', {}).format(
                    (reward * 1500000) / 100,
                  )}
                </h1>
              </div>
            </div>
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Total Payment</h1>
              <h1 className="font-bold text-xl text-red-600">
                {new Intl.NumberFormat('id-ID', {}).format(payment)}
              </h1>
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
            <Button
              size="lg"
              className="w-[200px] rounded-2xl"
              onClick={handleSubmit}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
