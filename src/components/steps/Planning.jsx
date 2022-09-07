import React from 'react';
import { IoPerson } from 'react-icons/io5';
import { RiTeamFill } from 'react-icons/ri';

function Planning() {
  return (
    <>
      <section className='flex justify-center items-center flex-col gap-y-2'>
        <h1 className='text-2xl font-bold text-[#151b28] text-center'>
          How are you Planning to use...
        </h1>
        <p className='text-[#6f7b92] font-normal'>
          We'll streamline your setup experience.
        </p>
      </section>
      <form className='space-y-4'>
        <div className='form-control flex justify-between space-x-7'>
          <div className='border p-4  rounded overflow-hidden  w-full cursor-pointer border-[#664de5]'>
            <div className='w-full '>
              <IoPerson className='text-xl text-[#664de5]' />
            </div>
            <h2 className='mt-2 font-bold text-sm text-[#474f5f]'>
              For myself
            </h2>
            <p className='mt-2 h-full w-full  text-left text-sm font-medium text-[#8c95a8]'>
              Write Better. Think more clearly.Stay organized.
            </p>
          </div>
          <div className='border p-4  rounded overflow-hidden  w-full cursor-pointer hover:border-[#664de5]'>
            <div className='w-full '>
              <RiTeamFill className='text-xl ' />
            </div>
            <h2 className='mt-2 font-bold text-sm text-[#474f5f]'>
              With my team
            </h2>
            <p className='mt-2   text-left text-sm  font-medium text-[#8c95a8]'>
              Wikis,docs,task & projects,all in one place.
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Planning;
