/* eslint-disable @next/next/no-img-element */
'use client';

import { loginAction } from '@/lib/features/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { toast } from 'sonner';
YupPassword(yup);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email cannot be empety'),
  password: yup.string().required('Password cannot be empety'),
});

const LoginCard = () => {
  const dispatch = useAppDispatch();
  const baseUrl = 'http://localhost:8000/api';
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const { data } = await axios.post(baseUrl + '/users/login', {
          email: values.email,
          password: values.password,
        });

        dispatch(loginAction(data.data));

        localStorage.setItem('token_auth', data.token);

        toast.success('Login success');

        router.push('/');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          toast.error(errorMsg);
        }
      }
    },
  });

  return (
    <div className="w-full h-screen flex items-start">
      <div className="hidden lg:relative lg:w-1/2 lg:h-full lg:flex flex-col">
        <div className="absolute top-[40%] left-[10%] right-[10%] flex flex-col bg-black/35 py-4 text-center">
          <h1 className="text-4xl text-white font-bold">Welcome back!</h1>
          <p className="text-xl text-white font-normal mt-2">
            We want to ensure you have the best experience with our event.
            Please log in to manage your account and explore everything our
            event has to offer.
          </p>
        </div>
        <img
          className="object-cover"
          style={{ width: '100vw', height: '100vh' }}
          src="./img-event.jpeg"
          alt="cover"
        />
      </div>

      <div className="w-full lg:w-1/2 h-full bg-white flex flex-col p-20 justify-between items-center">
        <div className="w-full flex flex-col max-w-[400px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-4">Sign In</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>
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
                  htmlFor="password"
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
              <div className="w-full flex items-center justify-end">
                <Link href="/forgot-password">
                  <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                    Forgot Password ?
                  </p>
                </Link>
              </div>
              <div className="w-full flex flex-col my-4">
                <button
                  type="submit"
                  className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Dont have a account?{' '}
            <Link href="/register">
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                Sign up for free
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
