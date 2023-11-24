import React from 'react'
import product1 from './sampleProducts/product1.jpg'
import product2 from './sampleProducts/product2.jpg'
import product3 from './sampleProducts/product3.jpg'
import product4 from './sampleProducts/product4.jpg'


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
    
]

const FeaturedProducts = () => {
    return (
        <div className="bg-[#f5efe3]">
            <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl font-semibold tracking-tight text-gray-900">Featured Collection</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group relative border border-4px border-[#C2A293] p-2 rounded-sm">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href={product.href}>
                                            <span aria-hidden="true" className="absolute inset-0 font-semibold hover:underline" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                    <button className='rounded-lg bg-[#956f5a] text-[#f5efe3] md:text-lg text-sm py-2 px-4 font-semibold hover:cursor-pointer hover:bg-[#C2A293]'>View All</button>
                </div>
            </div>
        </div>
    )

}

export default FeaturedProducts

