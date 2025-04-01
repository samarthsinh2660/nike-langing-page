// ShoeCard.jsx
import React from 'react';

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg, backgroundImage }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? 'border-coral-red'
          : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div 
        className="flex justify-center items-center sm:w-32 sm:h-32 rounded-xl max-sm:p-4"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={100}
          height={80}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;