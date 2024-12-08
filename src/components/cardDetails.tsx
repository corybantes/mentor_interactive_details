"use client";
import React, { FormEvent } from "react";
import { BgImage } from "./bgImage";
import { useState } from "react";
import Image from "next/image";

interface FormErrors {
  cardholder?: string;
  cardnumber?: string;
  month?: string;
  year?: string;
  cvc?: string;
  status?: string;
}

export default function CardDetails() {
  const [cardholder, setCardholder] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [status, setStatus] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});

  //   Object.keys(newErrors).length === 0

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const newErrors: FormErrors = {};
    if (!cardholder) {
      newErrors.cardholder = "Can't be blank";
    }
    if (!cardNumber) {
      newErrors.cardnumber = "Can't be blank";
    }
    if (cardNumber.length > 0 && cardNumber.length !== 16) {
      newErrors.cardnumber = "Invalid Digits";
    }
    if (!year) {
      newErrors.year = "Can't be blank";
    }
    if (year.length > 0 && year.length !== 2) {
      newErrors.year = "Invalid Digits";
    }
    if (!cvc) {
      newErrors.cvc = "Can't be blank";
    }
    if (cvc.length > 0 && cvc.length !== 3) {
      newErrors.cvc = "Invalid Digits";
    }
    if (!month) {
      newErrors.month = "Can't be blank";
    }
    if (month.length > 0 && month.length !== 2) {
      newErrors.month = "Invalid Digits";
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStatus(true);
    }
  };
  return (
    <div className='flex flex-col md:flex-row md:justify-between'>
      <div className='md:w-[36%]'>
        <BgImage
          cardholder={cardholder || "jane appleseed"}
          cardnumber={cardNumber || "0000000000000000"}
          mm={month || "00"}
          yy={year || "00"}
          cvc={cvc || "000"}
        />
      </div>
      <div className='md:w-[55%] md:max-w-[420px] lg:max-w-[480px] max-w-[550px] mx-auto p-8 py-16 flex flex-col md:place-self-center'>
        <form
          className={`${status == true ? "hidden" : ""}`}
          onSubmit={handleSubmit}
        >
          <div className='my-4'>
            <div className='uppercase my-1'>Cardholder Name</div>
            <input
              type='text'
              name='cardholder'
              placeholder='e.g. Jane Appleseed'
              value={cardholder}
              onChange={(e) => setCardholder(e.target.value)}
              className={`${
                errors.cardholder
                  ? "border-red-500"
                  : "border-Neutral-light_grayish_violet"
              } w-full border rounded-lg p-2 outline-none focus:border-Neutral-very_dark_violet`}
            />
            {errors.cardholder && (
              <p className='text-red-500 text-sm'>{errors.cardholder}</p>
            )}
          </div>
          <div className='my-4'>
            <div className='uppercase my-1'>Card Number</div>
            <input
              type='number'
              name='cardnumber'
              placeholder='e.g. 1234 5678 9123 0000'
              value={cardNumber}
              onChange={(e) => {
                if (e.target.value.length <= 16) {
                  setCardNumber(e.target.value);
                  errors.cardnumber = "";
                }
              }}
              className={`${
                errors.cardnumber
                  ? "border-red-500"
                  : "border-Neutral-light_grayish_violet"
              } w-full border rounded-lg p-2 outline-none focus:border-Neutral-very_dark_violet`}
            />
            {errors.cardnumber && (
              <p className='text-red-500 text-sm'>{errors.cardnumber}</p>
            )}
          </div>
          <div className='flex gap-3 justify-between my-4'>
            <div className='w-1/2'>
              <div className='uppercase my-1'>exp. date (mm/yy)</div>
              <div className='flex justify-between gap-3'>
                <input
                  type='month'
                  name='month'
                  placeholder='MM'
                  value={month}
                  onChange={(e) => {
                    if (e.target.value.length <= 2) {
                      setMonth(e.target.value);
                      errors.month = "";
                    }
                  }}
                  className={`${
                    errors.month
                      ? "border-red-500"
                      : "border-Neutral-light_grayish_violet"
                  } border w-full rounded-lg p-2 outline-none focus:border-Neutral-very_dark_violet`}
                />
                <input
                  type='number'
                  name='year'
                  placeholder='YY'
                  value={year}
                  onChange={(e) => {
                    if (e.target.value.length <= 2) {
                      setYear(e.target.value);
                      errors.year = "";
                    }
                  }}
                  className={`${
                    errors.year
                      ? "border-red-500"
                      : "border-Neutral-light_grayish_violet"
                  } border w-full rounded-lg p-2 outline-none focus:border-Neutral-very_dark_violet`}
                />
              </div>
              {(errors.month || errors.year) && (
                <p className='text-red-500 text-sm'>Can't be blank</p>
              )}
            </div>
            <div className='w-1/2'>
              <div className='uppercase my-1'>cvc</div>
              <input
                type='number'
                name='cvc'
                placeholder='e.g. 123'
                value={cvc}
                onChange={(e) => {
                  if (e.target.value.length <= 3) {
                    setCvc(e.target.value);
                    errors.cvc = "";
                  }
                }}
                className={`${
                  errors.cvc
                    ? "border-red-500"
                    : "border-Neutral-light_grayish_violet"
                } border rounded-lg p-2 w-full outline-none focus:border-Neutral-very_dark_violet`}
              />
              {errors.cvc && (
                <p className='text-red-500 text-sm'>{errors.cvc}</p>
              )}
            </div>
          </div>
          <button
            type='submit'
            className='py-2 w-full rounded-lg bg-Neutral-very_dark_violet px-4 text-white my-4'
          >
            Confirm
          </button>
        </form>
        <div className={`${status == false ? "hidden" : "my-auto"}`}>
          <div className='my-4 flex flex-col place-items-center text-center'>
            <Image
              src={"/images/icon-complete.svg"}
              width={80}
              height={80}
              alt='complete'
              className='my-4'
            />
            <h1 className='uppercase font-semibold text-3xl my-2'>
              thank you!
            </h1>
            <p>We&apos;ve added your card details</p>
          </div>
          <button
            type='button'
            className='w-full py-2 my-3 rounded-lg text-white bg-Neutral-very_dark_violet'
            onClick={() => {
              setStatus(false);
              setCardholder("");
              setCardNumber("");
              setMonth("");
              setYear("");
              setCvc("");
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
