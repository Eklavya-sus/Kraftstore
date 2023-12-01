import React from 'react';

export default function Footer() {
  return (
    <div>
      <div className="bg-[#956f5a] text-[#f5efe3]">
        <div className="max-w-2xl mx-auto py-10">
          <div className="text-center">
            <h3 className="md:text-3xl text-2xl mb-3">TheKraftCloset </h3>
            <h1 className='w-full md:text-4xl text-3xl font-medium'>Shop Aesthetic Gifts</h1>
            <h2 className='w-full md:text-lg text-sm mt-6 font-light'>For more info email us at thekraftcloset56@gmail.com</h2>
          </div>
          <div className="mt-20 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-200">
            <p className="order-2 md:order-1 mt-6 md:mt-0"> &copy; 2023 TheKraftCloset - All Rights Reserved</p>
            <div className="order-1 md:order-2">
              <div className="flex flex-row">
                <p className="px-2 mb-2 md:mb-0 md:mr-2">About us</p>
                <p className="px-2 border-l">Contact us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
