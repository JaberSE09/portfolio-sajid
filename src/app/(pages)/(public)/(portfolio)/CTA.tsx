'use client'

import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { FormInput, FormTextArea } from '@/components'
import { useEffect, useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import { Bounce, ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface FormData {
  subject: string;
  name: string;
  email: string;
  message: string;
}

const CTA = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState<FormData>({
    subject: "",
    name: "",
    email: "",
    message: "",
  });

  const showToastMessage = () => {
    toast.success("Email sent successfully!", {});
  };

  const sendEmail: SubmitHandler<FormData> = (data) => {
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
      process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
      form.current!,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(
      (result) => {
        showToastMessage();
        setFormData({
          subject: "",
          email: "",
          message: "",
          name: "",
        });
      },
      (error) => {
        toast.error("Failed to send email: " + error.text, {});
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const schemaResolver = yup.object().shape({
    name: yup.string().required('Please enter name'),
    subject: yup.string().required('Please enter subject'),
    email: yup.string().required('Please enter email').email('Please enter valid email'),
    message: yup.string().required('Please enter message'),
  });

  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schemaResolver),
  });

  return (
    <section className="pt-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div data-aos="fade-up" data-aos-duration={600}>
            <h2 className="md:text-3xl text-xl font-semibold my-5">
              Just say hi.
            </h2>
            <p className="text-slate-700">
              I am open to discuss your next projects, improve user experience of
              an existing websites or help with your new websites challenges.
            </p>
            <p className="text-slate-500 mt-12">Email me at</p>
            <h4>
              <Link href="mailto:sajidjaber@yahoo.com" className="text-lg font-semibold text-slate-600">
                sajidjaber@yahoo.com
              </Link>
            </h4>
            <div className="mt-12">
              <div className="flex flex-col gap-3">
                <h5 className="text-slate-400">Social</h5>
                <div className="flex gap-5">
                  <div>
                    <Link href="https://www.linkedin.com/in/sajidjaber/">
                      <svg
                        className="w-7 h-7 text-slate-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x={2} y={9} width={4} height={12} />
                        <circle cx={4} cy={4} r={2} />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration={900}>
            <form ref={form} onSubmit={handleSubmit(sendEmail)}>
              <FormInput
                control={control}
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"
                containerClassName="mb-4"
                placeholder="Your name"
              />
              <FormInput
                control={control}
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"
                placeholder="Your email where we can reach"
                containerClassName="mb-4"
              />
              <FormInput
                control={control}
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"
                placeholder="Subject"
                containerClassName="mb-4"
              />
              <FormTextArea
                control={control}
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full text-gray-700 border border-slate-200 rounded py-3 px-4 leading-tight focus:outline-none"
                placeholder="Write your message here. Keep it simple, concise and intriguing!"
                rows={5}
                containerClassName="mb-4"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="py-3 px-6 rounded border border-red-500 font-semibold text-white bg-red-500 hover:shadow-lg hover:shadow-red-500/50 focus:outline focus:outline-red-500/50 transition-all duration-500"
                >
                  Submit
                </button>
              </div>
              <ToastContainer
                style={{ position: "relative" }}
                position="bottom-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
              />
            </form>
          </div>
        </div>
        <hr className="mt-10" />
      </div>
    </section>
  )
}

export default CTA;
