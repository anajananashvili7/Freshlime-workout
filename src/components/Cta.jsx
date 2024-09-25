import React from 'react';

function Cta() {
  return (
    <div className="flex flex-col lg:flex-row bg-white pt-20 pb-16 px-4 lg:px-24 mx-auto max-w-screen-lg">
      <div className="pr-10 rounded-tl-[20px] rounded-bl-[20px] bg-gradient-to-br from-[#52a58c] to-[#087f5b] pt-[4.8rem] px-[6.4rem] pb-[6.4rem] flex-1 min-w-[300px]">
        <h2 className="font-bold mb-[3.2rem] text-[#02261b] text-[#555] text-[2rem] sm:text-[2.5rem]">Get your first week for free</h2>
        <p className="mb-[4.8rem] text-[#555] text-[1.2rem] sm:text-[1.6rem] leading-[1.8]">A lot of hummers waiting for you. Start working out today, make your best shape, and stay healthy and active with us!</p>
        <form className="space-y-4">
          <div className="flex flex-col space-y-4 mb-4 lg:flex-row lg:space-y-0 lg:space-x-4">
            <div className="flex-1">
              <label htmlFor="fullName" className="block mb-1 font-medium">Full Name</label>
              <input 
                placeholder="Mark Godwin" 
                type="text" 
                id="fullName" 
                required 
                className="w-full text-[1.4rem] sm:text-[1.8rem] rounded-[0.9rem] p-[0.5rem] border-none bg-[#b5d9ce] focus:outline-none" 
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input 
                placeholder="me@example.com" 
                type="email" 
                id="email" 
                required 
                className="w-full text-[1.4rem] sm:text-[1.8rem] rounded-[0.9rem] p-[0.5rem] border-none bg-[#b5d9ce] focus:outline-none" 
              />
            </div>
          </div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label htmlFor="selectWhere" className="block mb-1 font-medium">Where did you hear from us?</label>
              <select 
                id="selectWhere" 
                className="w-full max-w-xs text-[1.2rem] sm:text-[1.6rem] rounded-[0.9rem] p-[0.3rem] border-none bg-[#b5d9ce] focus:outline-none"
              >
                <option>Please choose an option:</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">YouTube video</option>
                <option value="podcast">Podcast</option>
                <option value="ad">Facebook ad</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="flex-1 flex items-end">
              <button 
                type="submit" 
                className="rounded-[16px] bg-[#02261b] text-[#e6f2ef] py-[0.5rem] hover:bg-opacity-80 transition w-full text-[1.4rem] sm:text-[1.8rem] font-medium self-end"
              >
                Sign up now
              </button>
            </div>
          </div>
        </form>
      </div>

      <img 
        src="/cta.png" 
        alt="Call to action" 
        className="w-full h-auto lg:w-[50%] object-cover rounded-tr-[15px] rounded-br-[15px]" 
      />
    </div>
  );
}

export default Cta;
