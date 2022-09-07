import React from 'react'

function Welcome() {
  return (
    <>
      <section className='flex justify-center items-center flex-col gap-y-2'>
        <h1 className='text-2xl font-bold text-[#151b28] text-center'>
          Welcome! First things first...
        </h1>
        <p className='text-[#6f7b92]'>You can always change them later.</p>
      </section>
      <form className='space-y-4'>
        <div className='form-control space-y-1'>
          <label htmlFor='name text-[#4e586c]'>Full Name</label>
          <input
            id='name'
            type='text'
            className='input placeholder-gray-500'
            placeholder='Steve Jobs'
          />
        </div>
        <div className='form-control space-y-1'>
          <label htmlFor='display_name text-[#4e586c]'>Display Name</label>
          <input
            id='display_name'
            type='text'
            className='input placeholder-gray-500'
            placeholder='Steve'
          />
        </div>
      </form>
    </>
  );
}

export default Welcome