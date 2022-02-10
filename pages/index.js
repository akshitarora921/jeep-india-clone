import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Modal from "../components/Modal";

import states from "../data/states.json";
import useToggle from "../hooks/useToggle";

export default function Home() {
  const [data, setData] = useState({});
  const [isOpen, closeModal, openModal] = useToggle();

  function handleSubmit(e) {
    e.preventDefault();
    const {
      salutation,
      firstName,
      lastName,
      number,
      email,
      state,
      exchangeCar,
      privacyPolicy,
    } = e.target;
    const payload = {
      fullName: `${salutation.value} ${firstName.value} ${lastName.value}`,
      mobileNumber: number.value,
      email: email.value,
      state: state.value,
      isExchangeCar: exchangeCar.checked,
      isPrivacyPolicy: privacyPolicy.checked,
    };
    setData(payload);
    e.target.reset();
    openModal();
  }
  return (
    <div>
      <Head>
        <title>Jeep India Clone</title>
        <meta name='description' content='Assignment for an interview' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Modal isOpen={isOpen} closeModal={closeModal} data={data} />
        <h1 className='text-4xl text-center p-3 bg-black text-white font-extrabold'>
          Jeep
        </h1>
        <div className='flex flex-col md:flex-row h-[600px] relative'>
          <div className='relative md:absolute h-[600px] w-full object-cover'>
            <Image
              src='/images/jeep-bg.jpg'
              layout='fill'
              alt='background cover'
              objectFit='cover'
            />
          </div>
          <p className='-rotate-90 z-10 text-white/50 text-xs absolute bottom-32'>
            <sup className='text-xs'>*</sup> T&C apply
          </p>
          <div className='flex flex-col text-white bg-black md:bg-black/70 z-10 w-full md:w-2/4 p-8 h-min my-auto md:ml-16'>
            <h3 className='text-2xl font-light uppercase'>
              The new jeep<sub className='text-xs'>®</sub> compass
            </h3>
            <h1 className='text-2xl md:text-4xl font-bold uppercase'>
              this is it, your dream suv.
            </h1>
            <p className='mt-4 text-sm md:text-md'>
              Stand out when you step out with an SUV that’s built to be
              legendary. The JeepCompass is an adventurer’s paradise – compact
              yet spacious, fierce yet luxurious. Come, experience its 4x4
              capabilities, 9-speed Automatic Transmission, engines in petrol
              and diesel variants, and dual-pane panoramic sunroof for a glimpse
              into a lifestyle we call the Jeep Life.
              <br />
              <br />
              <b>New</b>&nbsp;<b>Jeep Compass Range Starts at ₹17.79* Lacs</b>
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center mt-4 px-2 md:px-0'>
          <h1 className='text-2xl md:text-4xl  text-center font-bold uppercase text-[#333]'>
            BOOK A TEST DRIVE - NEW COMPASS & WRANGLER UNLIMITED
          </h1>
          <p className='mt-4 text-gray-500 text-center w-full md:w-4/6'>
            In light of the current situation, we would like to assure you that
            our dealerships are taking all the necessary precautions to create a
            safe environment for your visit. The showroom and all our test drive
            vehicles are properly sanitized for a safe test drive.
          </p>
          <div className='flex flex-col md:flex-row gap-16 w-full mt-5 md:px-28'>
            <div className='flex flex-col'>
              <p className='uppercase text-gray-500'>compass</p>
              <div className='relative border mt-3'>
                <Image
                  src='/images/jeep-car.jpg'
                  height={350}
                  width={600}
                  alt='background cover'
                  objectFit='contain'
                />
              </div>
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-between items-end px-2'>
                <h3 className='text-xl font-bold uppercase'>
                  Book you test drive
                </h3>
                <h5 className='text-sm'>
                  <span className='text-red-500'>*</span> Required Fields
                </h5>
              </div>
              <form
                className='w-full max-w-lg mx-auto my-5'
                onSubmit={handleSubmit}
              >
                <div className='flex flex-wrap mb-6'>
                  <div className='w-full md:w-1/2 px-3'>
                    <label
                      className='block uppercase tracking-wide text-gray-800 text-sm font-extrabold mb-2'
                      htmlFor='grid-state'
                    >
                      Salutation<span className='text-red-500'>&nbsp;*</span>
                    </label>
                    <div className='relative'>
                      <select
                        name='salutation'
                        className='block appearance-none w-full bg-white border border-gray-400 text-gray-800 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        required
                        id='grid-state'
                      >
                        {["Mr.", "Mrs.", "Ms."].map((name) => (
                          <option key={name}>{name}</option>
                        ))}
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center bg-yellow-300 px-2 text-gray-800'>
                        <svg
                          className='fill-current h-4 w-4'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                        >
                          <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label
                      className='block uppercase tracking-wide text-gray-800 text-sm font-extrabold mb-2'
                      htmlFor='grid-first-name'
                    >
                      First Name
                      <span className='text-red-500'>&nbsp;*</span>{" "}
                    </label>
                    <input
                      required
                      className='appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                      id='grid-first-name'
                      type='text'
                      name='firstName'
                      placeholder='First Name'
                    />
                  </div>
                  <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                    <label
                      className='block uppercase tracking-wide text-gray-800 text-sm font-extrabold mb-2'
                      htmlFor='grid-last-name'
                    >
                      Last Name
                      <span className='text-red-500'>&nbsp;*</span>{" "}
                    </label>
                    <input
                      required
                      className='appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-last-name'
                      type='text'
                      name='lastName'
                      placeholder='Last Name'
                    />
                  </div>
                  <div className='w-full md:w-1/2 px-3'>
                    <label
                      className='block uppercase tracking-wide text-gray-800 text-sm font-extrabold mb-2'
                      htmlFor='grid-last-name'
                    >
                      Mobile Number
                      <span className='text-red-500'>&nbsp;*</span>{" "}
                    </label>
                    <input
                      required
                      className='appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-last-name'
                      type='text'
                      placeholder='Number'
                      name='number'
                    />
                  </div>
                </div>
                <div className='flex flex-wrap mb-6'>
                  <div className='w-full px-3'>
                    <label
                      className='block uppercase tracking-wide text-gray-800 text-sm font-extrabold mb-2'
                      htmlFor='grid-password'
                    >
                      email
                      <span className='text-red-500'>&nbsp;*</span>{" "}
                    </label>
                    <input
                      required
                      className='appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-email'
                      type='email'
                      name='email'
                      placeholder='Email Address'
                    />
                  </div>
                </div>
                <div className='w-full px-3 mb-6'>
                  <label
                    className='block uppercase tracking-wide text-gray-800 text-sm font-extrabold mb-2'
                    htmlFor='grid-state'
                  >
                    State
                    <span className='text-red-500'>&nbsp;*</span>{" "}
                  </label>
                  <div className='relative mb-6'>
                    <select
                      className='block appearance-none w-full bg-white border border-gray-400 text-gray-800 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                      id='grid-state'
                      name='state'
                    >
                      {states.map(({ name }) => (
                        <option key={name}>{name}</option>
                      ))}
                    </select>
                    <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center bg-yellow-300 px-2 text-gray-800'>
                      <svg
                        className='fill-current h-4 w-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                      >
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='flex items-center space-x-2 px-3 mt-2'>
                  <input
                    required
                    type='checkbox'
                    id=''
                    className='inline-block w-4 h-4'
                    name='exchangeCar'
                  />
                  <p className='text-gray-600'>
                    I would like to exchange my car.
                  </p>
                </div>
                <div className='flex items-center space-x-2 px-3 mt-2'>
                  <input
                    required
                    type='checkbox'
                    name='privacyPolicy'
                    id=''
                    className='inline-block w-4 h-4'
                  />
                  <p className='text-gray-600 '>
                    I agree to the{" "}
                    <span className='font-extrabold underline cursor-pointer'>
                      Privacy Policy
                    </span>
                  </p>
                </div>
                <button
                  type='submit'
                  className='bg-yellow-500 text-black font-extrabold px-6 ml-3 py-2 mt-6 text-lg uppercase rounded duration-300 hover:brightness-90'
                >
                  Submit &gt;
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
