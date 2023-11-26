import React from 'react';
import Slider from 'react-slick';
import product1 from './sampleProducts/product1.jpg'
import product2 from './sampleProducts/product2.jpg'
import product3 from './sampleProducts/product3.jpg'
import product4 from './sampleProducts/product4.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

// Sample data for products
const products = [
    {
        id: 1,
        name: 'Birthday Cards',
        href: '#',
        imageSrc: product1,
        imageAlt: "Birthday Cards for your loved ones.",
        price: '$9',
        description: 'Customised birthday card for loved ones',
    },
    {
        id: 2,
        name: 'Aniversary Cards',
        href: '#',
        imageSrc: product2,
        imageAlt: "Aniversary Cards for your loved ones.",
        price: '$8.5',
        description: 'Customised aniversary card for loved ones',
    },
    {
        id: 1,
        name: 'Birthday Cards',
        href: '#',
        imageSrc: product1,
        imageAlt: "Birthday Cards for your loved ones.",
        price: '$9',
        description: 'Customised birthday card for loved ones',
    },
    {
        id: 3,
        name: 'Illustrations',
        href: '#',
        imageSrc: product3,
        imageAlt: "Illustrations for your loved ones.",
        price: '$14',
        description: 'Customised illustrations for loved ones',
    },
    {
        id: 4,
        name: 'Aesthetic Photo Frames',
        href: '#',
        imageSrc: product4,
        imageAlt: "Aesthetic Photo Frames for your loved ones.",
        price: '$12.99',
        description: 'Beautiful photo frames for loved ones',
    },
    {
        id: 2,
        name: 'Aniversary Cards',
        href: '#',
        imageSrc: product2,
        imageAlt: "Aniversary Cards for your loved ones.",
        price: '$8.5',
        description: 'Customised aniversary card for loved ones',
    },
    
]

const MoreCollectionSection = () => {
    const settings = {
        dots: true,
        infinite: false,
        arrows: true,
        speed: 500,
        slidesToShow: 4, // Number of products visible at a time
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-[#f5efe3]">
            <div className='mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
                <h2 className="text-gray-800 lg:text-3xl text-3xl font-medium tracking-wide">More from our Collections</h2>
               <Slider {...settings} className="slick-custom mt-6">
                    {products.map((product) => (
                        <div key={product.id} className="p-2">
                            <div className="border md:border-4px border-2px border-[#dad5cb] rounded-sm shawdow-lg overflow-hidden group">
                                <img
                                    src={product.imageSrc}
                                    alt={product.name}
                                    className="w-full h-40 lg:h-48 object-cover transition-transform duration-300 transform-gpu group-hover:scale-110"
                                />
                                <div className="p-4">
                                    <h3 className="text-xs md:text-lg font-medium">{product.name} &rarr;</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MoreCollectionSection;
