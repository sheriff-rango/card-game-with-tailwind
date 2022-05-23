import React from 'react';

type AppProps = {
  left: number;
  aceLeft: number;
};

const Statistics: React.FC<AppProps> = ({ left, aceLeft }) => {
  return (
    <div className="fixed w-full top-10 sm:top-20 left-0 flex justify-evenly items-center text-center text-white font-bold font-secondary">
      <div className="bg-black border border-cardborder z-50 w-24 sm:w-44">
        <div className="mt-2 text-xl sm:text-xxl">{left}</div>
        <div className="mb-2 text-lg sm:text-xl">Cards Left</div>
      </div>
      <div className="bg-black border border-cardborder z-50 w-24 sm:w-44">
        <div className="mt-2 text-xl sm:text-xxl">{aceLeft}</div>
        <div className="mb-2 text-lg sm:text-xl">Aces Left</div>
      </div>
    </div>
  );
};
export default Statistics;
