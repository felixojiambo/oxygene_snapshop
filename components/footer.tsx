import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#0c0c0c] text-white pt-12 pb-12 mt-16">
      {/* Orange and white blocks at bottom-left */}
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#f26b1d]" />
      <div className="absolute bottom-0 left-10 w-4 h-4 bg-white" />

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center mb-4 space-x-2">
          <Image src="/logo-industrium-small.png" alt="7 Industrium" width={20} height={20} />
          <span className="text-[#f26b1d] font-bold text-lg">Industrium</span>
          <span className="text-[#f26b1d] font-medium text-sm">since 1980</span>
        </div>
        <p className="text-xs text-gray-400 mb-8">2022 Industrium. All Rights Reserved by Artureanec</p>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-8 text-sm">
          {/* New York */}
          <div>
            <p className="font-bold text-gray-300 mb-2">New York</p>
            <p className="text-white">523 Sylan Ave, 5th Floor<br/>Mountain View, CA 94041, USA</p>
          </div>

          {/* Phone */}
          <div>
            <p className="font-bold text-gray-300 mb-2">Phone</p>
            <p className="text-white">+1 234 789 8948<br/>+1 987 654 3210</p>
          </div>

          {/* Email */}
          <div>
            <p className="font-bold text-gray-300 mb-2">Email</p>
            <p className="text-white">Interested in working with us?</p>
            <p className="text-[#f26b1d]"><Link href="mailto:support@industrium.com">support@industrium.com</Link></p>
          </div>

          {/* Follow us */}
          <div>
            <p className="font-bold text-gray-300 mb-2">Follow us</p>
            <div className="flex space-x-2 mb-2">
              <Link href="#"><Image src="/icons/facebook.svg" alt="Facebook" width={20} height={20} /></Link>
              <Link href="#"><Image src="/icons/twitter.svg" alt="Twitter" width={20} height={20} /></Link>
              <Link href="#"><Image src="/icons/instagram.svg" alt="Instagram" width={20} height={20} /></Link>
            </div>
          </div>

          {/* Main Menu */}
          <div>
            <p className="font-bold text-gray-300 mb-2">Main Menu</p>
            <ul className="space-y-1 text-white">
              <li><Link href="/" className="hover:text-[#f26b1d]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#f26b1d]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#f26b1d]">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#f26b1d]">Blog</Link></li>
              <li><Link href="/products" className="hover:text-[#f26b1d]">Products</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
