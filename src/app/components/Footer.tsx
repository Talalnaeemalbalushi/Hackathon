import React from 'react';

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center gap-6 px-5 w-full bg-white py-6">
      <section className="w-full flex flex-wrap items-start justify-between gap-6">
        {/* Intro Section */}
        <div className="intro flex flex-col gap-2 w-full lg:w-auto">
          <h1 className="text-[#3563e9] text-2xl lg:text-3xl font-bold text-center lg:text-left">MORENT</h1>
          <p className="text-gray-500 text-center lg:text-left w-[300px]">
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap gap-6 justify-center lg:justify-between w-full lg:w-auto lg:mr-10">
          <div className="about">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg"><h1>About</h1></li>
              <li><a href="#how-it-works">How it works</a></li>
              <li><a href="#featured">Featured</a></li>
              <li><a href="#partnership">Partnership</a></li>
              <li><a href="#business-relation">Business Relation</a></li>
            </ul>
          </div>
          <div className="community">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg"><h1>Community</h1></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#podcast">Podcast</a></li>
              <li><a href="#invite-friend">Invite a friend</a></li>
            </ul>
          </div>
          <div className="socials">
            <ul className="flex flex-col gap-1">
              <li className="font-bold text-lg"><h1>Socials</h1></li>
              <li><a href="https://discord.com">Discord</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
              <li><a href="https://twitter.com">Twitter</a></li>
            </ul>
          </div>
        </nav>
      </section>

      {/* Divider Line */}
      <div className="border-t w-full border-[#e7eef6]"></div>

      <section className="w-full flex flex-wrap items-center justify-between gap-4">
        <div className="text-center lg:text-left w-full lg:w-auto">
          <p className="font-bold text-sm">©2022 MORENT. All rights reserved</p>
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-4 w-full lg:w-auto">
          <a href="#privacy-policy" className="font-bold text-sm">Privacy & Policy</a>
          <a href="#terms-conditions" className="font-bold text-sm">Terms & Conditions</a>
        </div>
      </section>
    </footer>
  );
}