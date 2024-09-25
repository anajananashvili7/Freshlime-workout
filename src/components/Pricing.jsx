import React from 'react';
import { FaCookie, FaTachometerAlt } from 'react-icons/fa';

function Pricing() {
  return (
    <div className="bg-white pt-[5rem] py-[4.8rem] px-6 lg:px-[9.6rem]">
      <div className="block text-lg text-[#077252] mb-4 font-medium tracking-wider uppercase">
        Pricing
      </div>

      <span className="text-[2.8rem] tracking-[-0.5px] mb-[9.6rem] font-bold text-[#333]">
        Get your dream body
      </span>

      <div className="flex flex-col lg:flex-row justify-center gap-16">
       
        <div className="border-2 border-[#e6f2ef] p-[4.6rem] rounded-[11px] w-full lg:w-[35%] min-w-[350px]">
          <header className="text-center">
            <p className="text-[2rem] font-extrabold text-[#077252]">Monthly</p>
            <p className="text-[4.2rem] text-[#333] mb-[1.6rem] font-extrabold">$45</p>
            <p className="text-[1.6rem] text-[#777] mb-[1.6rem] font-extrabold">Pay every single month</p>
          </header>
          <ul className="text-[#555] text-[1.2rem] space-y-2">
            <li className="flex items-center">
              <FaTachometerAlt className="text-green-500 mr-2" />
              High quality stuff
            </li>
            <li className="flex items-center">
              <FaTachometerAlt className="text-green-500 mr-2" />
              Open 24/7
            </li>
            <li className="flex items-center">
              <FaTachometerAlt className="text-green-500 mr-2" />
              Every 10th protein free
            </li>
          </ul>
          <div className="text-center">
            <a href="#" className="inline-block bg-[#087f5b] text-white text-lg no-underline py-4 px-8 rounded-lg cursor-pointer mt-16">
              Get your month pass
            </a>
          </div>
        </div>

       
        <div className="border-2 border-[#e6f2ef] p-[4.6rem] rounded-[11px] w-full lg:w-[35%] bg-[#e6f2ef] pricing-plan--yearly min-w-[350px]">
          <header className="text-center">
            <p className="text-[2rem] font-extrabold text-[#077252]">Yearly</p>
            <p className="text-[4.2rem] text-[#333] mb-[1.6rem] font-extrabold">$600</p>
            <p className="text-[1.6rem] text-[#777] mb-[1.6rem] font-extrabold">Per month it's just $30</p>
          </header>
          <ul className="text-[#555] text-[1.2rem] space-y-2">
            <li className="flex items-center">
              <FaTachometerAlt className="text-green-500 mr-2" />
              Free sauna
            </li>
            <li className="flex items-center">
              <FaTachometerAlt className="text-green-500 mr-2" />
              Chapm with you
            </li>
            <li className="flex items-center">
              <FaTachometerAlt className="text-green-500 mr-2" />
              Plan of the year
            </li>
          </ul>
          <div className="text-center">
            <a href="#" className="inline-block bg-[#087f5b] text-white text-lg no-underline py-4 px-8 rounded-lg cursor-pointer mt-16">
              Get your yearly pass
            </a>
          </div>
        </div>
      </div>

      <aside className="text-[1.2rem] leading-[1.6] text-center text-[#555] pt-16">
        Prices include all applicable taxes. You can cancel at any time.
        Both plans include the following:
      </aside>

      <div className="flex flex-wrap justify-between pt-16">
        <div className="p-4 w-full sm:w-1/2 lg:w-1/4 min-w-[250px]">
          <p className="text-[1.5rem] text-[#333] font-bold mb-[1.6rem]">Train every day!</p>
          <p className="text-[1.2rem] leading-[1.8] text-[#555]">Our gym is open 365 days a year, even holidays you can come!</p>
        </div>
        <div className="p-4 w-full sm:w-1/2 lg:w-1/4 min-w-[250px]">
          <p className="text-[1.5rem] text-[#333] font-bold mb-[1.6rem]">Natural and organic</p>
          <p className="text-[1.2rem] leading-[1.8] text-[#555]">Our proteins are the best in the world and organic good for health.</p>
        </div>
        <div className="p-4 w-full sm:w-1/2 lg:w-1/4 min-w-[250px]">
          <p className="text-[1.5rem] text-[#333] font-bold mb-[1.6rem]">Motivation</p>
          <p className="text-[1.2rem] leading-[1.8] text-[#555]">We have motivational speakers to motivate you every day.</p>
        </div>
        <div className="p-4 w-full sm:w-1/2 lg:w-1/4 min-w-[250px]">
          <p className="text-[1.5rem] text-[#333] font-bold mb-[1.6rem]">Pause anytime</p>
          <p className="text-[1.2rem] leading-[1.8] text-[#555]">You got a full year and have a vacation? Pause it; it is possible with us.</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
