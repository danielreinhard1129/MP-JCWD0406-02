/* eslint-disable @next/next/no-img-element */
'use client';

import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { toast } from 'sonner';
YupPassword(yup);

  const ForgotPasswordCard = () => {

  const baseUrl = 'http://localhost:8000/api';
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      try {
        await axios.post(baseUrl + '/users/forgot-password', {
          email: values.email,
        });

        toast.success('Email forgot password sent successfully');

        router.push('/');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data.message || error.message;
          toast.error(errorMsg);
        }
      }
    },
  });


    return (
        <div className="w-full flex justify-center mt-28 lg:mt-52 ">
          <div className="w-full flex flex-col max-w-[330px] shadow-md p-5">
            <h3 className='flex justify-center text-2xl font-bold'>Forgot Password</h3>
            <div className="w-full flex flex-col">
              <form onSubmit={formik.handleSubmit}>
                <div className="relative z-0 mb-6 w-full group mt-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email
                  </label>
                  {formik.errors.email && formik.touched.email && (
                    <p className="text-sm text-red-500 mt-2">
                      {formik.errors.email}
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
    )
  }
  
  export default ForgotPasswordCard