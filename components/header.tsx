// 'use client';
//
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname, useSearchParams } from 'next/navigation';
//
// export default function Header() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//
//   // Determine heading
//   let heading = '';
//   if (pathname === '/cart') {
//     heading = 'Cart';
//   } else if (pathname === '/products') {
//     const category = searchParams.get('category');
//     if (category) {
//       const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
//       heading = `Shop Category: ${capitalizedCategory}`;
//     } else {
//       heading = 'Product List';
//     }
//   } else if (pathname?.startsWith('/products/') && pathname !== '/products') {
//     heading = 'Single Product';
//   } else if (pathname === '/about') {
//     heading = 'About';
//   } else if (pathname === '/contact') {
//     heading = 'Contact';
//   } else if (pathname === '/') {
//     heading = 'Product List'; // Home or default page
//   } else {
//     heading = 'Product List'; // fallback
//   }
//
//   return (
//     <>
//       {/* Top Navigation Bar */}
//       <div className="w-full bg-white border-b border-gray-200 py-4">
//         <div className="container mx-auto px-4 flex items-center justify-between">
//           {/* Logo on the left */}
//           <div className="flex items-center space-x-2">
//             <Image src="/logo.png" alt="Oxygene" width={40} height={40} />
//             <span className="text-black font-medium text-lg">Oxygene</span>
//           </div>
//
//           {/* Navigation links centered */}
//           <div className="flex-1">
//             <nav>
//               <ul className="flex items-center justify-center space-x-6 text-sm font-medium text-gray-700">
//                 <li><Link href="/">Home</Link></li>
//                 <li><Link href="/about">About</Link></li>
//                 <li><Link href="/products">Products</Link></li>
//                 <li><Link href="/cart">Cart</Link></li>
//                 <li><Link href="/contact">Contact</Link></li>
//               </ul>
//             </nav>
//           </div>
//
//           {/* Right side spacer - currently empty */}
//           <div className="w-20"></div>
//         </div>
//       </div>
//
//       {/* Hero / Banner Section */}
//       <section className="relative w-full h-[350px] overflow-hidden">
//         <Image
//           src="/banner.png"
//           alt="Banner"
//           fill
//           className="object-cover"
//           priority
//         />
//
//         {/* Logo, Brand, and Heading moved further to the right */}
//         <div className="absolute inset-0 flex flex-col justify-center pl-32">
//           {/* Logo and Brand above heading */}
//           <div className="flex items-center space-x-2 mb-2">
//             <Image src="/logo.png" alt="Oxygene" width={40} height={40} />
//             {/* Changed text color to white for better visibility */}
//             <span className="text-white font-medium text-lg">Oxygene</span>
//           </div>
//           <h1 className="text-white text-5xl font-bold">{heading}</h1>
//         </div>
//       </section>
//     </>
//   );
// }
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button'; // Adjust this import based on your ShadCN UI setup

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Determine heading
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
    heading = 'Single Product';
  } else if (pathname === '/about') {
    heading = 'About';
  } else if (pathname === '/contact') {
    heading = 'Contact';
  } else if (pathname === '/') {
    heading = 'Product List'; // Home or default page
  } else {
    heading = 'Product List'; // fallback
  }

  return (
    <>
      {/* Top Navigation Bar */}
      <div className="w-full bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Oxygene" width={40} height={40} />
            <span className="text-black font-medium text-lg">Oxygene</span>
          </div>

          {/* Navigation links centered with ShadCN UI buttons */}
          <div className="flex-1">
            <nav>
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
          </div>

          {/* Right side spacer - currently empty */}
          <div className="w-20"></div>
        </div>
      </div>

      {/* Hero / Banner Section */}
      <section className="relative w-full h-[350px] overflow-hidden">
        <Image
          src="/banner.png"
          alt="Banner"
          fill
          className="object-cover"
          priority
        />

        {/* No decorative blocks as requested */}

        {/* Logo, Brand, and Heading moved to the right with pl-32 */}
        <div className="absolute inset-0 flex flex-col justify-center pl-32">
          {/* Logo and Brand above heading, now white text for visibility */}
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
