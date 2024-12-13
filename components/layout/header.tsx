'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Determine heading dynamically based on the current route
  let heading = '';
  if (pathname === '/cart') {
    heading = 'Cart';
  } else if (pathname === '/products') {
    const category = searchParams.get('category');
    if (category) {
      const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
      heading = `Shop Category: ${capitalizedCategory}`;
    } else {
      heading = 'Product List';
    }
  } else if (pathname?.startsWith('/products/') && pathname !== '/products') {
    heading = 'Product Details';
  } else if (pathname === '/about') {
    heading = 'About Us';
  } else if (pathname === '/contact') {
    heading = 'Contact Us';
  } else if (pathname === '/') {
    heading = 'Welcome to Oxygene'; // Default for the home page
  } else {
    heading = 'Explore Our Products'; // Fallback for unknown routes
  }

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="w-full bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Oxygene" width={40} height={40} />
            <span className="text-black font-medium text-lg">Oxygene</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1">
            <ul className="flex items-center justify-center space-x-6 text-sm font-medium text-gray-700">
              <li>
                <Link href="/" passHref>
                  <Button variant="link">Home</Button>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <Button variant="link">About</Button>
                </Link>
              </li>
              <li>
                <Link href="/products" passHref>
                  <Button variant="link">Products</Button>
                </Link>
              </li>
              <li>
                <Link href="/cart" passHref>
                  <Button variant="link">Cart</Button>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <Button variant="link">Contact</Button>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Spacer for alignment */}
          <div className="w-20"></div>
        </div>
      </div>

      {/* Hero / Banner Section */}
      <section className="relative w-full h-[350px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/banner.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />

        {/* Logo, Brand, and Dynamic Heading */}
        <div className="absolute inset-0 flex flex-col justify-center pl-32">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2 mb-2">
            <Image src="/logo.png" alt="Oxygene" width={40} height={40} />
            <span className="text-white font-medium text-lg">Oxygene</span>
          </div>
          <h1 className="text-white text-5xl font-bold">{heading}</h1>
        </div>
      </section>
    </>
  );
}
