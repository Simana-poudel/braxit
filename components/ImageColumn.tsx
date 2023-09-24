import React from 'react';

const ImageColumn = () => {
  return (
    <div>

    <div className='md:flex hidden grid grid-cols-3 gap-0'>
        <div
          className='h-96 hover:cursor-pointer hover:brightness-50 flex flex-col justify-center items-center text-white'
          style={{ backgroundImage: 'url(/icons/gallery1.png.webp)' }}
        >
            <span className='uppercase text-2xl font-extrabold	mb-7'>Mechanical Engineering</span>
            <p className='text-base px-20 text-center mb-4'>We collect and analyze information about your general usage of the website, products, services.</p>
            <a href="#">Learn More</a>
        </div>

        <div
          className='h-96 hover:cursor-pointer hover:brightness-50 flex flex-col justify-center items-center text-white'
          style={{ backgroundImage: 'url(/icons/gallery2.png.webp)' }}
        >
            <span className='uppercase text-2xl font-extrabold	mb-7'>Mechanical Engineering</span>
            <p className='text-base px-20 text-center mb-4'>We collect and analyze information about your general usage of the website, products, services.</p>
            <a href="#">Learn More</a>
        </div>

        <div
          className='h-96 hover:cursor-pointer hover:brightness-50 flex flex-col justify-center items-center text-white'
          style={{ backgroundImage: 'url(/icons/gallery3.png.webp)' }}
        >
            <span className='uppercase text-2xl font-extrabold	mb-7'>Mechanical Engineering</span>
            <p className='text-base px-20 text-center mb-4'>We collect and analyze information about your general usage of the website, products, services.</p>
            <a href="#">Learn More</a>
        </div>
    </div>

    {/* mobile navigation */}
    <div className='sm:hidden flex-col flex'>
        <div
          className='h-96 hover:cursor-pointer hover:brightness-50 flex flex-col justify-center items-center text-white'
          style={{ backgroundImage: 'url(/icons/gallery1.png.webp)' }}
        >
            <span className='uppercase text-2xl font-extrabold	mb-7'>Mechanical Engineering</span>
            <p className='text-base px-20 text-center mb-4'>We collect and analyze information about your general usage of the website, products, services.</p>
            <a href="#">Learn More</a>
        </div>

        <div
          className='h-96 hover:cursor-pointer hover:brightness-50 flex flex-col justify-center items-center text-white'
          style={{ backgroundImage: 'url(/icons/gallery2.png.webp)' }}
        >
            <span className='uppercase text-2xl font-extrabold	mb-7'>Mechanical Engineering</span>
            <p className='text-base px-20 text-center mb-4'>We collect and analyze information about your general usage of the website, products, services.</p>
            <a href="#">Learn More</a>
        </div>

        <div
          className='h-96 hover:cursor-pointer hover:brightness-50 flex flex-col justify-center items-center text-white'
          style={{ backgroundImage: 'url(/icons/gallery3.png.webp)' }}
        >
            <span className='uppercase text-2xl font-extrabold	mb-7'>Mechanical Engineering</span>
            <p className='text-base px-20 text-center mb-4'>We collect and analyze information about your general usage of the website, products, services.</p>
            <a href="#">Learn More</a>
        </div>
    </div>
    </div>

  );
};

export default ImageColumn;
