'use client';
import React, { useState } from "react";
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { IoCloseSharp } from 'react-icons/io5';
import Label from './LabelComponent';
import DynamicField from './AuthField';
import ErrorDynamic from './ErrorComponent';
import Button from './ButtonComponentForAuth'; // Adjust the import path as needed
import { useForgotPasswordMutation } from '@/redux/service/auth';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { useAppDispatch } from '@/redux/hooks';
import { setEmail } from '@/redux/feature/verify/verifySlice';
import Image from 'next/image'
import Link from 'next/link';
type ValueTypes = {
    email: string;
};

const initialValues: ValueTypes = {
    email: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('អ៉ីម៉ែលរបស់អ្នកមិនត្រឹមត្រូវ').required('អ្នកត្រូវបញ្ជូលអ៉ីម៉ែលរបស់អ្នក'),
});

const ForgotPasswordComponent = () => {
  const [forgotPassword]=useForgotPasswordMutation();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const handleForgotPassword = async (values:ValueTypes)=>{
    setIsLoading(true);
    const { email } = values;
    try{
      const response = await forgotPassword({ email }).unwrap();
      toast.success(response.message || "Password reset email sent successfully!");
      dispatch(setEmail(email));
      // Optionally, navigate to a confirmation page
      setTimeout(() => {
        router.push("/verify-code-forgot"); // Update the path to your actual confirmation page
      });
    }catch(error:unknown){
      console.error("Forgot Password Error:", error);

      if (error && typeof error === 'object' && 'status' in error && 'data' in error) {
        const typedError = error as { status: number; data: { detail?: string; message?: string } };

        if (typedError.data?.detail) {
          // Specific error message like "User with this email does not exist."
          toast.error(typedError.data.detail);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } else {
        toast.error("An unknown error occurred.");
      }
    }finally {
      setIsLoading(false);
    }
    
  }

  return (
    
    <section className="w-full h-screen flex justify-center items-center ">
        <div className='w-[90%] h-[55%]  sm:h-[60%] md:h-[60%] xl:w-[85%] xl:h-[58%] m-auto border-1 border border-slate-100 rounded-xl'>
        <div className="px-6 sm:px-8 md:px-6 xl:px-10">
            {/* Close Button - Left Aligned */}
            <div className=" flex justify-between items-center">
             <Link href="/">
             <Image
                      src="/assets/logo-test.png"
                      width={24} height={24}
                        alt="Logo Image"
                        className="mt-4"
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
        <div className=" h-fit mt-7 ">
          <h1 className="text-4xl font-bold text-primary">ភ្លេចពាក្យសម្ងាត់</h1>
          <p className='pt-3 text-slate-400'>សូមបញ្ចូលអ៉ីម៉ែល ដើម្បីទទួលបានលេខកូដផ្ទៀងផ្ទាត់</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleForgotPassword(values);
              console.log('Form Submitted:', values);
              setSubmitting(false); // Simulate a submission delay
            }}
          >
            {({}) => (
              <Form>
                <div className="space-y-4 mt-8">
                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" text="អ៉ីម៉ែល" required />
                    <DynamicField
                      type="text"
                      name="email"
                      id="email"
                      placeholder="បញ្ចូលអ៉ីម៉ែលរបស់អ្នក"
                    />
                    <ErrorDynamic  name="email" component="div" />
                  </div>

                  
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <Button
                    type="submit"
                    text="ផ្ញើលេខសម្ងាត់"
                    isLoading={isLoading} // Show loading spinner when the form is submitting
                    className="w-full bg-primary hover:bg-primary text-white font-medium border-collapse"
                  />
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

export default ForgotPasswordComponent;
