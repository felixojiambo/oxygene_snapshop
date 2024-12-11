'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full relative mb-8">
      <div className="relative w-full h-[350px] overflow-hidden">
        <Image 
          src="/banner.jpg"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Logo top-left: ensure this logo matches the reference exactly */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <Image src="/logo-industrium.png" alt="7 Industrium" width={40} height={40} />
          {/* If reference only shows the '7' mark and 'Industrium' text in a certain style,
              ensure the logo image already contains both. Remove extra text if not needed. */}
        </div>

        {/* Decorative black and white blocks at top-right corner */}
        {/* Adjust sizes and positions to match the reference image. For example: */}
        <div className="absolute top-6 right-6 w-8 h-8 bg-black"></div>
        <div className="absolute top-8 right-8 w-4 h-4 bg-white"></div>

        {/* Centered Product List text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Product List</h1>
        </div>
      </div>

      {/* Nav bar */}
      <nav className="bg-black text-white">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center space-x-6 py-3 text-sm font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
