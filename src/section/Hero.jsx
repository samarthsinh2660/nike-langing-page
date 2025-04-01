// Hero.jsx
import React, { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constant/index';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  // Direct path to collection background
  const collectionBackgroundPath = '/src/assets/images/collection-background.svg';
  // We'll pass this to ShoeCard instead of using it here
  const thumbnailBackgroundPath = '/src/assets/images/thumbnail-background.svg';
  
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      {/* Left Section */}
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collections
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right Section with Big Shoe Image */}
      <div 
        className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40"
        style={{
          backgroundImage: `url(${collectionBackgroundPath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />
        
        {/* Thumbnail Section - Now without background directly applied */}
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[15%] sm:left-[10%] max-sm:px-6 p-4 rounded-lg z-20">
          {shoes.map((s) => (
            <div key={s.bigShoe}>
              <ShoeCard
                imgURL={s}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
                backgroundImage={thumbnailBackgroundPath}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;