import React from "react";
// import Image from "next/image";

export const BgImage = ({
  cardholder,
  cardnumber = "0000000000000000",
  mm,
  yy,
  cvc,
}: {
  cardholder?: string;
  cardnumber?: string;
  mm?: string;
  yy?: string;
  cvc?: string;
}) => {
  return (
    <div className=''>
      <div className='hidden md:block md:relative md:h-screen bg-bg-desktop bg-cover bg-center'>
        <div className='w-[320px] h-[200px] lg:w-[370px] rounded-lg absolute top-[55%] -right-[23%] lg:-right-[30%] bg-card-back bg-center bg-cover bg-no-repeat p-12 drop-shadow-2xl'>
          <div className='text-white my-9 tracking-wider text-right'>{cvc}</div>
        </div>
        <div className='w-[320px] h-[200px] lg:w-[370px] absolute  rounded-lg top-[15%] -right-[17%] lg:-right-[20%] bg-card-front bg-center bg-cover bg-no-repeat p-5 drop-shadow-2xl'>
          <div className='text-white'>
            <div className='flex gap-4 items-center '>
              <div className='w-10 h-10 rounded-full bg-white'></div>
              <div className='w-4 h-4 rounded-full bg-transparent border border-white'></div>
            </div>
            <div className='my-4 mt-10 text-[23px] lg:text-[26px] tracking-wider'>
              {cardnumber.replace(/(.{4})/g, "$1 ")}
            </div>
            <div className='flex gap-28 justify-between my-4 text-sm'>
              <span className='uppercase'>{cardholder}</span>
              <span>
                {mm}/{yy}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden h-[270px] relative bg-bg-mobile bg-cover bg-center'>
        <div className='w-[90%] max-w-[370px] h-[200px] absolute top-7 right-[6%] bg-card-back bg-center bg-cover bg-no-repeat p-12'>
          <div className='my-9 tracking-wider text-right text-white'>{cvc}</div>
        </div>
        <div className='w-[90%] max-w-[370px] h-[200px] absolute top-[49%] left-[5%] bg-card-front bg-center bg-cover bg-no-repeat p-5 drop-shadow-2xl'>
          <div className='text-white'>
            <div className='flex gap-4 items-center '>
              <div className='w-10 h-10 rounded-full bg-white'></div>
              <div className='w-4 h-4 rounded-full bg-transparent border border-white'></div>
            </div>
            <div className='my-4 mt-10 text-[26px] tracking-wider'>
              {cardnumber.replace(/(.{4})/g, "$1 ")}
            </div>
            <div className='flex gap-28 justify-between my-4 text-sm'>
              <span className='uppercase'>{cardholder}</span>
              <span>
                {mm}/{yy}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
