import React from 'react'
import { services } from '../constant';
import ServicesCard from '../components/ServicesCard';

const Services = () => {
  return (
   <section className='max-container flex justify-center flex-wrap gap-9'>
     {services.map((s) => (
      <ServicesCard key={s.label} {...s}/>
     ))}
   </section>
  )
}

export default Services;
