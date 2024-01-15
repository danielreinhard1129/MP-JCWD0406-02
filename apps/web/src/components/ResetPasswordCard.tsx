/* eslint-disable @next/next/no-img-element */
'use client';

import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useRouter, useSearchParams } from 'next/navigation';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { toast } from 'sonner';
YupPassword(yup);

const validationSchema = yup.object().shape({
  password: yup.string().required('Password cannot be empety').min(6),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password mush match')
    .required('Password cannot be empety'),
});

const ResetPasswordCard = () => {
  const searchParams = useSearchParams();
  const baseUrl = 'http://localhost:8000/api';
  const router = useRouter();
  const token = searchParams.get('token');

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.patch(
          baseUrl + '/users/reset-password',
          {
            password: values.password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        toast.success('Reset password successfully');

        router.push('/login');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          toast.error(errorMsg);
        }
      }
    },
  });

  return (
    <div className="w-full flex justify-center mt-28 lg:mt-52 ">
      <div className="w-full flex flex-col max-w-[330px] shadow-md p-5">
        <h3 className="flex justify-center text-2xl font-bold">
          Reset Password
        </h3>
        <div className="w-full flex flex-col">
          <form onSubmit={formik.handleSubmit}>
            <div className="relative z-0 mb-6 w-full group mt-5">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <label
                htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
              {formik.errors.password && formik.touched.password && (
                <p className="text-sm text-red-500 mt-2">
                  {formik.errors.password}
                </p>
              )}
            </div>
            <div className="relative z-0 mb-6 w-full group mt-5">
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
              />
              <label
                htmlFor="confirmPassword"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm Password
              </label>
              {formik.errors.confirmPassword &&
                formik.touched.confirmPassword && (
                  <p className="text-sm text-red-600 mt-2">
                    {formik.errors.confirmPassword}
                  </p>
                )}
            </div>
            <div className="w-full flex flex-col my-4">
              <button
                type="submit"
                className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordCard;
