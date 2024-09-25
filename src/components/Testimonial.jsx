import React from 'react';

function Testimonial() {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-20 px-6 lg:px-24">
      <div className="flex-1 p-6">
        <span className="text-center text-base lg:text-lg text-[#077252] mb-4 font-medium uppercase">How We Work</span>
        <h2 className="text-2xl lg:text-4xl mb-10 font-extrabold text-[#333]">Our benefits and skills that make you happy</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <img src="/customer-1.jpg" alt="Customer 1" className="custom-img mb-4" />
            <p className="text-lg lg:text-xl leading-relaxed mb-4 text-[#555]">Hi there, Lola here! I never liked the gym before. I am lazy, hahaha, but in Fresh Lime you just can't be lazy; I want to work hours and never stop!</p>
            <span className="text-lg lg:text-xl text-[#777]">— Lola Lee</span>
          </div>

          <div className="flex flex-col">
            <img src="/customer-2.jpg" alt="Customer 2" className="custom-img mb-4" />
            <p className="text-lg lg:text-xl leading-relaxed mb-4 text-[#555]">I'm from Maldives, and I’ve never seen a gym like Fresh Lime. Love everything! They have the best machines for chest, and my wife loves it.</p>
            <span className="text-lg lg:text-xl text-[#777]">— Marcus Stanford</span>
          </div>

          <div className="flex flex-col">
            <img src="/customer-3.jpg" alt="Customer 3" className="custom-img mb-4" />
            <p className="text-lg lg:text-xl leading-relaxed mb-4 text-[#555]">In Fresh Lime, I feel like home. Best staff, amazing personal trainers, and one of the best protein bars inside. I love everything!</p>
            <span className="text-lg lg:text-xl text-[#777]">— Marta Hansen</span>
          </div>

          <div className="flex flex-col">
            <img src="/customer-4.jpg" alt="Customer 4" className="custom-img mb-4" />
            <p className="text-lg lg:text-xl leading-relaxed mb-4 text-[#555]">When I started, I was skinny. Now I'm like a mountain. Every single day coming to Fresh Lime gives me energy, passion, happiness, joy, and love!</p>
            <span className="text-lg lg:text-xl text-[#777]">— Steve McCarthy</span>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 grid grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:rounded-none">
          <img
            src="/gym-1.jpg"
            alt="Gym 1"
            className="block w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:rounded-none">
          <img
            src="/gym-2.jpg"
            alt="Gym 2"
            className="block w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:rounded-none">
          <img
            src="/gym-3.jpg"
            alt="Gym 3"
            className="block w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:rounded-none">
          <img
            src="/gym-4.jpg"
            alt="Gym 4"
            className="block w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:rounded-none">
          <img
            src="/gym-2.jpg"
            alt="Gym 5"
            className="block w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
        <div className="overflow-hidden rounded-2xl transition-all duration-300 ease-in-out hover:rounded-none">
          <img
            src="/gym-6.jpg"
            alt="Gym 6"
            className="block w-full h-auto transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

