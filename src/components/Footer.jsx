import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <div className="pb-16 px-4 sm:px-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 bg-white border-t border-[#eee] text-[1.2rem] text-gray-600 p-6">
      <div className="flex flex-col mb-6">
        <a href="#">
          <img src="/logo.png" alt="Logo" className="mb-8 h-10" />
        </a>
        <ul className="flex space-x-4 mb-4">
          <li>
            <a href="#" className="hover:text-[#087f5b]">
              <FaInstagram size={35} />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#087f5b]">
              <FaFacebookF size={35} />
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#087f5b]">
              <FaTwitter size={35} />
            </a>
          </li>
        </ul>
        <p className="text-[1rem] leading-[1.6] text-[#087f5b]">
          Copyright © created in 2024 by Ana Jananashvili
        </p>
      </div>

      <div className="flex flex-col mb-6">
        <p className="font-bold mb-[1rem] text-[1.4rem]">Contact us</p>
        <address>
          <p className="pb-[1.4rem]">Tbilisi Georgia, Digomi Masivi, Mikeladze street</p>
          <p>+995595704430</p>
          <p>anajananashvili6@gmail.com</p>
        </address>
      </div>

      <div className="flex flex-col mb-6">
        <p className="text-[1.4rem] font-bold mb-[1rem]">Account</p>
        <ul>
          <li className="pb-[1.4rem]">Create account</li>
          <li className="pb-[1.4rem]">Sign in</li>
          <li className="pb-[1.4rem]">iOS app</li>
          <li>Android app</li>
        </ul>
      </div>

      <div className="flex flex-col mb-6">
        <p className="font-bold mb-[1rem] text-[1.4rem]">Company</p>
        <ul>
          <li className="pb-[1.4rem]">About FreshLime</li>
          <li className="pb-[1.4rem]">For Business</li>
          <li className="pb-[1.4rem]">Partners</li>
          <li>Careers</li>
        </ul>
      </div>

      <div className="flex flex-col mb-6">
        <p className="font-bold mb-[1rem] text-[1.4rem]">Resources</p>
        <ul>
          <li className="pb-[1.4rem]">Working plan</li>
          <li className="pb-[1.4rem]">Help center</li>
          <li className="pb-[1.4rem]">Privacy & Terms</li>
          <li>My other works</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

