/* eslint-disable @next/next/no-img-element */

'use client';
import axios, { AxiosError } from 'axios';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import { toast } from 'sonner';
import Link from 'next/link';
import { useState } from 'react';
YupPassword(yup);

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Username cannot be empty'),
  personOrCompany: yup.string().required('Name person/company cannot be empty'),
  password: yup.string().required('Password cannot be empty').min(6),
  role: yup.string().required('Selected role cannot be empty'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required('Password cannot be empty'),
});

const RegisterCard = () => {
  const [inputReferral, setInputReferral] = useState('');
  const [success, setSuccess] = useState(false);
  const baseUrl = 'http://localhost:8000/api';
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      personOrCompany: '',
      password: '',
      confirmPassword: '',
      role: '',
      referralCode: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        let roleId;

        if (values.role == 'customer') {
          roleId = 1;
        } else {
          roleId = 2;
        }

        await axios.post(baseUrl + '/users/register', {
          email: values.email,
          name: values.personOrCompany,
          password: values.password,
          roleId: roleId,
          referralCode: inputReferral,
        });

        toast.success('Register success');

        router.push('/login');
      } catch (error) {
        if (error instanceof AxiosError) {
          const errorMsg = error.response?.data || error.message;
          toast.error(errorMsg);
        }
      }
    },
  });

  const handleReferralCode = async () => {
    try {
      await axios.post(baseUrl + '/users/claim-referralCode', {
        referralCode: inputReferral,
      });
      toast.success('Claim referral code success');
      setSuccess(true);
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMsg = error.response?.data || error.message;
        toast.error(errorMsg);
      }
    }
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="hidden lg:relative lg:w-1/2 lg:h-full lg:flex flex-col">
        <div className="absolute top-[40%] left-[10%] right-[10%] flex flex-col bg-black/35 py-4 text-center">
          <h1 className="text-4xl text-white font-bold"> Welcome back!</h1>
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

      <div className="w-full lg:w-1/2 h-full bg-white flex flex-col p-12 justify-between items-center">
        <div className="w-full flex flex-col max-w-[400px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-4">Sign Up</h3>
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
                  <p className="text-sm text-red-600 mt-2">
                    {formik.errors.email}
                  </p>
                )}
              </div>
              <div className="relative z-0 mb-6 w-full group mt-5">
                <input
                  type="text"
                  name="personOrCompany"
                  id="personOrCompany"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.personOrCompany}
                />
                <label
                  htmlFor="personOrCompany"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name Person/Company
                </label>
                {formik.errors.personOrCompany &&
                  formik.touched.personOrCompany && (
                    <p className="text-sm text-red-600 mt-2">
                      {formik.errors.personOrCompany}
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
              <div className="relative z-0 mb-6 w-full group mt-5">
                <select
                  name="role"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.role}
                >
                  <option>Selected Role</option>
                  <option value="customer">Customer</option>
                  <option value="organizer">Organizer</option>
                </select>
                {formik.errors.role && formik.touched.role && (
                  <p className="text-sm text-red-600 mt-2">
                    {formik.errors.role}
                  </p>
                )}
              </div>
              <div className="relative z-0 mb-6 w-full group mt-5">
                <div className="relative">
                  <input
                    type="text"
                    name="referralCode"
                    id="referralCode"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    onChange={(e) => setInputReferral(e.target.value)}
                    value={inputReferral}
                    disabled={success}
                  />
                  <label
                    htmlFor="referralCode"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Referral Code
                  </label>
                  <input
                    type="button"
                    disabled={success}
                    onClick={handleReferralCode}
                    value="claim"
                    className={`text-white absolute end-2.5 bottom-2.5 ${
                      success ? 'bg-gray-500' : 'bg-gray-800'
                    } hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700`}
                  />
                </div>
              </div>
              <div className="w-full my-4">
                <button
                  type="submit"
                  className="w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-3 text-center flex items-center justify-center cursor-pointer"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-1">
          <p className="text-sm font-normal text-[#060606]">
            have a account?{' '}
            <Link href="/login">
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                Sign In for join
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
