import React from 'react';

export default function Home() {
  return (
    <div className='bg-image flex justify-center items-center'>
      <div className="bg-[#f5efe3] md:w-1/2 h-auto w-full p-4 lg:px-4 lg:py-8 md:rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-black lg:text-3xl text-lg fon-semibold">Shop Our Aesthetics</h1>
          <p className="my-4 md:text-sm text-xs text-center text-gray-600 leading-loose tracking-widest">
          Discover affordable, personalized aesthetic gifts capturing life's moments—frames and hampers celebrating every occasion. At TheKraftCloset, gifting's an art, we're here to help you ace it. Explore our collection and experience the joy of gifting like never before. Revolutionizing gifting, our unique online platform is your go-to destination for aesthetic gifts! Enjoy shopping. 
          </p>
          <div className="flex gap-6">
            <button className='rounded-lg bg-[#956f5a] text-[#f5efe3] md:text-lg text-sm py-2 px-4 font-semibold hover:cursor-pointer hover:bg-[#C2A293]'>Shop Now</button>
            <button className='rounded-lg bg-[#956f5a] text-[#f5efe3] md:text-lg text-sm py-2 px-4 font-semibold hover:cursor-pointer hover:bg-[#C2A293]'>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
