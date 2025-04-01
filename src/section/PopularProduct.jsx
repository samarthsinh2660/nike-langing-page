import React from 'react'
import { products } from '../constant'
import PopularProductCrad from '../components/PopularProductCrad'


const PopularProduct = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-red'>Popular</span> Products
        </h2>
        <p className='font-montserrat lg:max-w-lg mt-2 text-slate-gray'>Experience top-notch quality and style with our sought-after selections. Discover the world of comfort and innovation.</p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>

        {products.map((products) => (
          <PopularProductCrad key={products.name} {...products}/>
        ))}

      </div>
      
    </section>
  )
}

export default PopularProduct
