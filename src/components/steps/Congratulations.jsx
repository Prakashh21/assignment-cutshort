import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai';

function Congratulations() {
  return (
    <>
      <div className='w-full py-2 flex justify-center items-center text-[#664de5] text-6xl'>
        <AiFillCheckCircle />
      </div>
      <section className='flex justify-center items-center flex-col gap-y-2'>
        <h1 className='text-2xl font-bold text-[#151b28] text-center'>
          Congrtulations, Eren!
        </h1>
        <p className='text-[#6f7b92] font-normal'>
          We'll streamline your setup experience.
        </p>
      </section>
    </>
  );
}

export default Congratulations