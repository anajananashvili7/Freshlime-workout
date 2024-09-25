import React from 'react';
import Features from './Features';

function HowitWorks() {
  return (
    <>
      <div className="bg-white py-20 px-6 md:px-24">
        <Features />
      </div>

      <div className="py-20 px-6 md:px-24 bg-white">
        <span className="block text-lg font-semibold text-[#077252] mb-4 uppercase tracking-wide">How we work</span>
        <h2 className="text-2xl md:text-4xl font-bold mb-24 text-[#333] tracking-tight">
          Our benefits and skills that make you happy
        </h2>

        <div className="space-y-8">
         
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-6xl md:text-9xl font-medium text-[#ddd] mb-4">01</h3>
              <p className="mt-2 text-2xl md:text-3xl leading-tight mb-8 font-bold text-[#333] tracking[-0.5px]">
                For all 7 days in a week our diet plan
              </p>
              <p className="text-lg md:text-xl leading-8">
                We have our own brand chef, who created a diet meal plan for every single human being's body type, all included in the subscription price.
              </p>
            </div>
            <img src="/meal.jpg" alt="Diet Meal Plan" className="w-full md:w-[50%] rounded-lg h-auto" />
          </div>

          
          <div className="flex flex-col md:flex-row items-center">
            <img src="/personal-trainer.jpg" alt="Personal Trainer" className="w-full md:w-[50%] rounded-lg h-auto mb-8 md:mb-0 md:mr-8" />
            <div className="flex-1">
              <h3 className="text-6xl md:text-9xl font-medium text-[#ddd] mb-4">02</h3>
              <p className="mt-2 text-2xl md:text-3xl leading-tight mb-8 font-bold text-[#333] tracking[-0.5px]">
                One of the best personal trainers
              </p>
              <p className="text-lg md:text-xl leading-8">
                In our gym, you will find champions of bodybuilding who will ensure your success.
              </p>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0">
              <h3 className="text-6xl md:text-9xl font-medium text-[#ddd] mb-4">03</h3>
              <p className="mt-2 text-2xl md:text-3xl leading-tight mb-8 font-bold text-[#333] tracking[-0.5px]">
                Gym equipment
              </p>
              <p className="text-lg md:text-xl leading-8">
                We strive to have the latest gym equipment, keeping up with trends to make your workouts easier and more enjoyable.
              </p>
            </div>
            <img src="/equipment.jpg" alt="Gym Equipment" className="w-full md:w-[50%] rounded-lg h-auto" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HowitWorks;
