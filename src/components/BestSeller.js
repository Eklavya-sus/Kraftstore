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
            <h2
              className="text-xl font-bold text-black
         sm:text-3xl"
            >
              Our Best Sellers
            </h2>
          </header>

          <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
            <li className="lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 ">
              <a href="#" className="relative block group">
                <img
                  src={product3}
                  alt=""
                  className="object-cover w-full transition mt-2 duration-500 aspect-square  group-hover:opacity-90"
                />
                <div class="mt-3">
                  <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Aesthetic Photo Frames
                  </h3>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="relative block group">
                <img
                  src={product1}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div class="">
                  <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Birthday Cards
                  </h3>
                </div>
              </a>
            </li>

            <li>
              <a href="#" className="relative block group">
                <img
                  src={product2}
                  alt=""
                  className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
                />
                <div class="">
                  <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Aniversary Cards
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
