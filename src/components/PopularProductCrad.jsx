import React from 'react'
import { star } from '../assets/icons'

const PopularProductCrad = ({imgURL,name , price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <img src={imgURL} alt={name}  className='w-[280px] h-[280px]'/>
      <div className='flex justify-start gap-2.5 mt-8'>
        <img src={star} alt="rating" width={24} height={24} />
        <p className='tex-xl font-montserrat text-slate-gray leading-normal'>4.5 </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='font-semibold font-montserrat leading-normal text-coral-red mt-2 text-2xl'>{price}</p>
    </div>
  )
}

export default PopularProductCrad
