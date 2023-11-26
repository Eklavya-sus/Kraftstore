import React from "react";
import product1 from "./sampleProducts/product1.jpg";
import product2 from "./sampleProducts/product2.jpg";
import product3 from "./sampleProducts/product4.jpg";

const BestSeller = () => {
  return (
    <div className="bg-[#f5efe3]">
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
          <header className="">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Our Best Sellers</h2>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 border md:border-4px border-2px border-[#dad5cb] rounded-sm">
              <a href="#" className="relative block group">
                <img
                  src={product3}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-75"
                />
                <div className="text-center p-2 md:p-6">
                  <h2 className="font-medium text-xl text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Aesthetic Photo Frames &rarr;
                  </h2>
                </div>
              </a>
            </li>
            <li className="border md:border-4px border-2px border-[#dad5cb] rounded-sm">
              <a href="#" className="relative block group">
                <img
                  src={product1}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-75 "
                />
                <div className="text-center p-2">
                  <h3 className="font-medium text-xl text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Birthday Cards &rarr;
                  </h3>
                </div>
              </a>
            </li>

            <li className="border md:border-4px border-2px border-[#dad5cb] rounded-sm">
              <a href="#" className="relative block group">
                <img
                  src={product2}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-75"
                />
                <div className="text-center p-2">
                  <h3 className="font-medium text-xl text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Aniversary Cards &rarr;
                  </h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default BestSeller;
