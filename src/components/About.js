import React from 'react';
import art3 from './assests/art3.jpg'

export default function About() {
  return (
   
      <div className="bg-[#f5efe3] h-auto w-full md:pt-0 pt-6 lg:px-4 lg:py-8 md:rounded-lg">
        <div className="flex flex-col justify-center items-center m-4">
          <h1 className="text-gray-800 lg:text-3xl text-3xl font-medium uppercase">About Us</h1>
          <div className="md:flex justify-center items-center gap-12">
            <img className="md:w-1/4 md:mt-0 mt-3" src={art3} alt="alt" />
          <p className="my-4 md:w-1/2 md:text-lg text-xs text-gray-600 leading-loose tracking-widest">
          Discover affordable, personalized aesthetic gifts capturing life's moments—frames and hampers celebrating every occasion. At TheKraftCloset, gifting's an art, we're here to help you ace it. Explore our collection and experience the joy of gifting like never before. Revolutionizing gifting, our unique online platform is your go-to destination for aesthetic gifts! Enjoy shopping. 
          </p>
          </div>
        </div>
      </div>
  );
}
