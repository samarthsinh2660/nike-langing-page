import React from 'react';
import Hero from './section/hero';
import PopularProduct from './section/PopularProduct';
import SuperQuality from './section/superQuality';
import Services from './section/Services';
import SpecialOffer from './section/specialOffer';
import CR from './section/CR';
import Surcribe from './section/surcribe';
import Footer from './section/footer';
import Nav from './components/nav';

const App = () => (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>

      <section className='padding'>
        <PopularProduct/>
      </section>

      <section className='padding'>
       <SuperQuality/>
      </section>

      <section className='padding-x py-10'>
        <Services/>
      </section>

      <section className='padding'>
        <SpecialOffer/>
      </section>

      <section className='bg-pale-blue padding'>
        <CR/>
      </section>

      <section className='padding-x sm:py-32 py-16 w-full'>
       <Surcribe/>
      </section>

      <section className='bg-black padding-x padding-t pb-8'>
       <Footer/>
      </section>

    </main>
);

export default App;
