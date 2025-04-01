import React from 'react'
import { reviews } from '../constant'
import ReviewCard from '../components/ReviewCard'

const CR = () => {
  return (
    <section className='max-conatiner'>
      <h3 className='font-palanquin text-center text-4xl font-bold'>
        What our
        <span className='text-coral-red '> Customers </span> says
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>
       Hear genuine stories from our satisfied customers about their
       exceptional experiences with us.
      </p>
      <div className='mt-24 flex justify-evenly  items-center max-lg:flex-col gap-14'>
        {reviews.map((r)=> (
          <ReviewCard key={r.customerName} imgURL={r.imgURL} customerName={r.customerName} rating={r.rating}
            feedback={r.feedback}
          />
        ))}
      </div>
    </section>      
  )
}

export default CR
