import { getTransactionsBydate } from '@/repositories/transaction/getTransactionsByDate';

export const getTransactionsByDateAction = async () => {
  try {
    const week = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const filterByweek = await getTransactionsBydate(week);

    const month = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const filterByMonth = await getTransactionsBydate(month);

    const year = new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
    const filterByYear = await getTransactionsBydate(year);

    return {
      message: 'get Transactions by date success',
      status: 200,
      data: { filterByweek, filterByMonth, filterByYear },
    };
  } catch (error) {
    throw error;
  }
};
