import React from 'react';

function Features() {
  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h2 className="text-[1.4rem] font-medium leading-[1.4] text-center mb-[2.4rem] text-[#999]">
        As featured in hello
      </h2>
      <div className="flex flex-wrap justify-around items-center gap-10">
        <img 
          src="/techcrunch.png" 
          className="max-h-[2rem] h-auto opacity-50 mx-2" 
          style={{ filter: 'brightness(0)' }} 
          alt="TechCrunch"
        />
        <img 
          src="/business-insider.png" 
          className="max-h-[2rem] h-auto opacity-50 mx-2" 
          style={{ filter: 'brightness(0)' }} 
          alt="Business Insider"
        />
        <img 
          src="/the-new-york-times.png" 
          className="max-h-[2rem] h-auto opacity-50 mx-2" 
          style={{ filter: 'brightness(0)' }} 
          alt="The New York Times"
        />
        <img 
          src="/forbes.png" 
          className="max-h-[2rem] h-auto opacity-50 mx-2" 
          style={{ filter: 'brightness(0)' }} 
          alt="Forbes"
        />
        <img 
          src="/usa-today.png" 
          className="max-h-[2rem] h-auto opacity-50 mx-2" 
          style={{ filter: 'brightness(0)' }} 
          alt="USA Today"
        />
      </div>
    </div>
  );
}

export default Features;
