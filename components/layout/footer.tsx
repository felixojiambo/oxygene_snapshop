import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#0c0c0c] text-white pt-12 pb-8">
      {/* Red and White Squares */}
      {/*<div className="absolute bottom-0 left-0 flex">*/}
      {/*  <div className="w-16 h-16 bg-[#f26b1d]" />*/}
      {/*  <div className="w-4 h-4 bg-white mt-12 ml-[-8px]" />*/}
      {/*</div>*/}

      {/* Footer Content */}
      <div className="container mx-auto px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and Year */}
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-2">
              <Image src="/logo-industrium-small.png" alt="Industrium Logo" width={24} height={24} />
              <span className="text-[#f26b1d] font-bold text-lg">Industrium</span>
            </div>
            <p className="text-sm text-gray-400">since 1980</p>
            <p className="text-xs text-gray-500 mt-2">2022 Industrium. All Rights Reserved by Artureanec</p>
          </div>

          {/* New York and Social Links */}
          <div>
            <p className="font-bold text-gray-300 mb-2">New York</p>
            <p className="text-sm text-white mb-4">
              523 Sylan Ave, 5th Floor
              <br />
              Mountain View, CA 94041, USA
            </p>
            <p className="font-bold text-gray-300 mb-2">Follow us</p>
            <div className="flex space-x-2">
              <Link href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} /></Link>
              <Link href="#"><Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} /></Link>
              <Link href="#"><Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} /></Link>
              <Link href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} /></Link>
            </div>
          </div>

          {/* Phone and Email */}
          <div>
            <p className="font-bold text-gray-300 mb-2">Phone</p>
            <p className="text-sm text-white mb-4">
              +1 234 789 8948
              <br />
              +1 987 654 3210
            </p>
            <p className="font-bold text-gray-300 mb-2">Email</p>
            <p className="text-sm text-white mb-1">Interested in working with us?</p>
            <p className="text-sm text-[#f26b1d]">
              <Link href="mailto:support@industrium.com">support@industrium.com</Link>
            </p>
          </div>

          {/* Main Menu */}
          <div>
            <p className="font-bold text-gray-300 mb-2">Main Menu</p>
            <ul className="grid grid-cols-2 gap-y-1 text-sm text-white">
              <li><Link href="/public">Home</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contacts">Contacts</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
