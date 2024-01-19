import { updatePointById } from '@/repositories/pointbalance/updatePointById';
import { deleteUserRewardById } from '@/repositories/reward/deleteUserRewardById';
import { updateUserVoucherById } from '@/repositories/voucher/updateUserVoucherByid';

interface Data {
  userVoucherId: number;
  userRewardId: number;
  pointByUserId: number;
}

export const claimRewardAction = async (data: Data) => {
  try {
    const { userVoucherId, userRewardId, pointByUserId } = data;

    if (userVoucherId) {
      await updateUserVoucherById(userVoucherId);
    }

    if (userRewardId) {
      await deleteUserRewardById(userRewardId);
    }

    if (pointByUserId) {
      await updatePointById(pointByUserId);
    }

    return {
      message: 'claim reward success',
      status: 200,
    };
  } catch (error) {
    throw error;
  }
};
