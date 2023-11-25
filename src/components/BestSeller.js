import React from 'react';
import product1 from './sampleProducts/product1.jpg';

const BestSeller = () => {
    return (
        <div className="bg-[#f5efe3]">
            <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Our Best Seller</h2>
                <div className="mt-6 flex justify-around">
                    <div className="aspect-h-4 w-1/2 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            src={product1}
                            alt="best seller"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className='w-1/3 h-1/6 flex flex-col justify-around'>
                    <img
                            src={product1}
                            alt="best seller"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src={product1}
                            alt="best seller"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
