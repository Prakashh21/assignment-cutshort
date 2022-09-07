import React from 'react';

function Logo() {
  return (
    <>
      <section className='w-auto flex justify-center items-center'>
        <a href='/' className='h-6 flex justify-center items-center'>
          <img
            src='./new_logo_full.png'
            alt='cutShortLogo'
            className='max-h-full'
          />
        </a>
      </section>
    </>
  );
}

export default Logo;
