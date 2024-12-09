'use client';
import React, { useState } from "react";
import {signIn} from "next-auth/react"
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { IoCloseSharp } from 'react-icons/io5';
import Label from './LabelComponent';
import DynamicField from './AuthField';
import ErrorDynamic from "./ErrorComponent";
import PasswordField from './PasswordField';
import Link from 'next/link';
import Button from './ButtonComponentForAuth'; 
import { useAppDispatch,useAppSelector } from '@/redux/hooks';
import { selectToken,setAccessToken} from '@/redux/feature/auth/authSlice';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';
import Image from 'next/image'
type ValueTypes = {
  email: string;
  password: string;
};

const initialValues: ValueTypes = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required to input your email.'),
  password: Yup.string()
    .min(8, 'Short Password, 8 characters required')
    .required('Required to input your password'),
});


const LoginComponent = () => {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectToken);
  console.log("Access token: from Redux store", accessToken);

  const handleLogin = async (user: ValueTypes)=>{
    const {email, password} = user
    setIsLoading(true); // Set loading state to true
    try{
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_LOCALHOST}login`,{
        method: 'POST',
        headers:{
          "content-type": "application/json",
        },
        body: JSON.stringify({email,password})
      });

      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to login');
        // throw new Error('Failed to login'); // Now uses the native Error class
      }
  
      const data = await response.json();
      console.log("Login response data: ", data);
      if(data.accessToken){
           dispatch(setAccessToken(data.accessToken));
           toast.success("Logged in Successfully.", {
            autoClose: 3000,
        });
           console.log("Access token: ", data.accessToken)

      }else{
        throw new Error('Access token not found in response');
      }
   
    }catch(error){
      toast.error('An error occurred during login.');
      console.log(error);
    }finally {
      setIsLoading(false); // Reset loading state to false
    }
  }

  return (
    <section className="w-full h-full flex justify-center items-center ">
        <div className='w-[90%] h-[90%] sm:w-[75%] sm:h-[90%] md:w-[95%] md:h-[90%] xl:w-[90%] xl:h-[85%] m-auto '>
        <div className="px-6 sm:px-8 md:px-6 xl:px-8">
          <div className=" flex justify-between items-center">
             <Link href="/">
             <Image
                      src="/assets/logo-test.png"
                      width={24} height={24}
                        alt="Logo Image"
                      />
             </Link>
                <div className="">
                <button
                    className="text-2xl text-gray-500 hover:text-gray-700"
                    onClick={() => console.log('Close button clicked')}
                >
                    <IoCloseSharp />
                </button>
                </div>
          </div>
            
        <div className="mt-20">
          <h1 className="text-4xl font-bold text-primary">Login</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log('Form Submitted:', values);
              handleLogin(values);
              setSubmitting(false); // Simulate a submission delay
            }}
          >
            {() => (
              <Form>
                <div className="space-y-4 mt-5">
                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" text="Email" required />
                    <DynamicField
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Input Your Email "
                    />
                    <ErrorDynamic name="email" component="div" />
                  </div>

                  {/* Password Field */}
                  <div>
                    <Label htmlFor="password" text="Password" required />
                    <PasswordField
                      name="password"
                      id="password"
                      placeholder="Input Your Password"
                      className="custom-class mt-1"
                    />
                    <ErrorDynamic name="password" component="div" />
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="mt-2 text-right">
                  <Link href="/forgot-password">
                    <span className="text-sm text-primary hover:underline hover:font-semibold ">
                      Forgot Password?
                    </span>
                  </Link>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <Button
                    type="submit"
                    text="Login"
                    isLoading={isLoading} // Show loading spinner when the form is submitting
                    className="w-full bg-primary hover:bg-primary text-white font-medium border-collapse"
                  />
                </div>
                {/* OR Divider */}
                <div className="flex items-center justify-center space-x-4 my-4">
                    <span className="w-1/2 border-b border-gray-300"></span>
                    <span className="text-sm text-gray-500">ឬ</span>
                    <span className="w-1/2 border-b border-gray-300"></span>
                </div>
                 {/* Google Button */}
                <div className="mt-4 text-center">
                    <Button
                   
                    type="button"
                    text="Continue with Google"  
                    onClick={() => signIn('google')}
                    icon={
                    <Image
                   src="/assets/google.png"
                   width={24} height={24}
                    alt="Google icon"
                  />
                    }
                    className=" w-full border-2 border-primary  text-textprimary "
                    />
                </div>
                {/* Don't have accoun? Register */}
                <div className='mt-4 text-center text-textprimary '>
                    <span>Dont&apos;t have account yet?<Link href="/register" className='text-primary hover:underline hover:font-semibold pl-1.5'>Register</Link></span>
                </div>
              </Form>
              
            )}
           
          </Formik>
          <ToastContainer />
        </div>
      </div>
        </div>
      
    </section>
  );
};

export default LoginComponent;
