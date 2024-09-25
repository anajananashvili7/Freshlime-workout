import React from 'react';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-16 py-16 px-4 lg:px-24">
      <div className="flex flex-col max-w-lg w-full">
        <h1 className="text-3xl lg:text-4xl leading-tight mb-8 font-bold text-[#333] tracking[-0.5px]">
          Welcome to the one of the best Gym Freshlime
        </h1>
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          This is the cheapest, comfortable, best price with world champion coaches and one of the best bartenders for your protein shakes.
        </p>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 items-center">
          <a href="#try" className="bg-[#087f5b] text-white text-lg p-4 rounded transition duration-300 hover:bg-[#077252] font-bold">
            Get your month pass
          </a>
          <a href="#" className="text-[#555] bg-white text-lg p-4 rounded hover:underline font-bold">
            Learn more ↓
          </a>
        </div>
        <div className="flex items-center mt-8">
          <div className="flex space-x-[-1.6rem]">
            {[...Array(6)].map((_, index) => (
              <img 
                key={index}
                src={`/customer-${index + 1}.jpg`} 
                className="h-[3.8rem] w-[3.8rem] rounded-full border-[3px] border-[#e6f2ef] object-cover" 
                alt={`Customer ${index + 1}`} 
              />
            ))}
          </div>
          <p className="text-lg text-[#555] font-semibold leading-relaxed pl-4">
            from the <span className="text-[#077252]">whole</span> world!
          </p>
        </div>
      </div>
      <div className="min-w-[300px] w-full lg:w-auto">
        <img 
          src="/gym.jpg" 
          alt="Gym" 
          className="w-full h-auto max-h-[800px] rounded shadow-lg" 
        />
      </div>
    </div>
  );
}

export default Hero;
