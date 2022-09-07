import React from 'react'

function Setup() {
  return (
    <>
      <section className='flex justify-center items-center flex-col gap-y-2'>
        <h1 className='text-2xl font-bold  text-[#151b28] text-center'>
          Let's set up a home for all...
        </h1>
        <p className='text-[#6f7b92]'>You can always create another workspace later.</p>
      </section>
      <form className='space-y-4'>
        <div className='form-control space-y-1'>
          <label htmlFor='name text-[#4e586c]'>Workspace Name</label>
          <input
            id='name'
            type='text'
            className='input'
            placeholder='Steve Jobs'
          />
        </div>
        <div className='form-control space-y-1'>
          <label htmlFor='name text-[#4e586c]'>Workspace Name</label>
          <div class='flex name'>
            <span class='py-3 inline-flex items-center px-3 text-sm text-gray-500 bg-[#f8f9fc] rounded-l-md border border-r-0 '>
              www.eden.com/
            </span>
            <input
              type='text'
              id='website-admin'
              class='py-3 rounded-none rounded-r-lg bg-white border text-gray-500 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm  p-2.5   '
              placeholder='Example'
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Setup