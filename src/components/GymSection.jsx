import React from 'react';
import { FaHeartbeat, FaEye, FaList, FaDumbbell, FaMedal, FaUserFriends, FaCheck, FaPlusSquare } from 'react-icons/fa';

function Gym() {
  return (
    <div className="p-4 bg-white py-[4.8rem] px-[2rem] md:px-[9.6rem]">
      <span className="block text-center text-[1.6rem] text-[#077252] mb-[1.6rem] font-medium tracking-wide uppercase">
        Inside Us
      </span>
      <h2 className="text-[2.4rem] md:text-[2.8rem] text-center font-bold mb-[4rem] text-[#333] tracking-tighter">
        At our gym you will find everything you need
      </h2>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 mb-6">
          <img src="/card-img-1.jpg" alt="Fresh new cardio" className="w-full mb-2 rounded-[15px]" />
          <div className="p-[3.2rem] pb-[4.8rem] shadow-lg mt-2">
            <div className="inline-block py-1 px-2 text-[1.2rem] uppercase rounded-full text-[#333] font-semibold bg-[#51cf66]">Fresh new cardio</div>
            <p className="text-[2rem] text-[#333] font-semibold mb-[3.2rem] capitalize">Cardio Part</p>
            <ul className="list-none flex flex-col gap-4">
              <li className="flex items-center text-[1.6rem] md:text-[1.8rem] text-[#555] font-normal leading-[1]">
                <FaHeartbeat className="mr-2" style={{ color: '#40c057' }} />
                High tempo cardio
              </li>
              <li className="flex items-center text-[1.6rem] md:text-[1.8rem] text-[#555] font-normal leading-[1]">
                <FaEye className="mr-2" style={{ color: '#40c057' }} />
                Best view
              </li>
              <li className="flex items-center text-[1.6rem] md:text-[1.8rem] text-[#555] font-normal leading-[1]">
                <FaList className="mr-2" style={{ color: '#40c057' }} />
                All kinds
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 mb-6">
          <img src="/card-img-2.jpg" alt="Heavy Bars" className="w-full mb-2 rounded-[15px]" />
          <div className="p-[3.2rem] pb-[4.8rem] shadow-lg mt-2">
            <div className="inline-block py-1 px-2 text-[1.2rem] uppercase rounded-full text-[#333] font-semibold bg-[#94d82d]">Heavy Bars</div>
            <p className="text-[2rem] text-[#333] font-semibold mb-[3.2rem] capitalize">Best Bars</p>
            <ul className="list-none flex flex-col gap-4">
              <li className="flex items-center text-[1.6rem] md:text-[1.8rem] text-[#555] font-normal leading-[1]">
                <FaDumbbell className="mr-2" style={{ color: '#40c057' }} />
                100KG plus
              </li>
              <li className="flex items-center text-[1.6rem] md:text-[1.8rem] text-[#555] font-normal leading-[1]">
                <FaMedal className="mr-2" style={{ color: '#40c057' }} />
                Champion
              </li>
              <li className="flex items-center text-[1.6rem] md:text-[1.8rem] text-[#555] font-normal leading-[1]">
                <FaUserFriends className="mr-2" style={{ color: '#40c057' }} />
                Support
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 mb-6">
          <h3 className="text-[2.4rem] md:text-[3rem] leading-[1.2] mb-[3.2rem] font-bold text-[#333] tracking[-0.5px]">Our equipment:</h3>
          <ul className="list-none flex flex-col gap-4 text-[#555]">
            <li className="flex items-center text-[1.6rem] md:text-[1.8rem] font-medium gap-4">
              <FaCheck className="text-[#40c057] mr-2" />
              CHEST PRESS MACHINE
            </li>
            <li className="flex items-center text-[1.6rem] md:text-[1.8rem] font-medium gap-4">
              <FaCheck className="text-[#40c057] mr-2" />
              SEATED DIP MACHINE
            </li>
            <li className="flex items-center text-[1.6rem] md:text-[1.8rem] font-medium gap-4">
              <FaCheck className="text-[#40c057] mr-2" />
              CHEST FLY MACHINE
            </li>
            <li className="flex items-center text-[1.6rem] md:text-[1.8rem] font-medium gap-4">
              <FaCheck className="text-[#40c057] mr-2" />
              BENCH PRESS
            </li>
            <li className="flex items-center text-[1.6rem] md:text-[1.8rem] font-medium gap-4">
              <FaCheck className="text-[#40c057] mr-2" />
              INCLINE BENCH PRESS
            </li>
            <li className="flex items-center text-[1.6rem] md:text-[1.8rem] font-medium gap-4">
              <FaCheck className="text-[#40c057] mr-2" />
              ADJUSTABLE BENCH
            </li>
            <li className="flex items-center text-[1.6rem] md:text-[1.8rem] font-medium gap-4">
              <FaCheck className="text-[#40c057] mr-2" />
              OLYMPIC WEIGHT BENCH
            </li>
            <li className="flex items-center text-[1.6rem] md:text-[1.8rem] font-medium gap-4">
              <FaCheck className="text-[#40c057] mr-2" />
              GHD MACHINE
            </li>
            <li className="flex items-center text-[1.6rem] md:text-[1.8rem] font-medium gap-4">
              <FaPlusSquare className="text-[#40c057] mr-2" />
              AND WAY MORE
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 text-center">
        <a 
          href="#" 
          className="text-[#087f5b] border-b border-[#087f5b] pb-0.5 transition-all duration-300 hover:text-[#065f4b]">
          Check our equipments →
        </a>
      </div>
    </div>
  );
}

export default Gym;
