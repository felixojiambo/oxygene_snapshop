import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-sm">
          <p>New York, 523 Sylan Ave, 5th Floor</p>
          <p>Mountain View, CA 94041, USA</p>
          <p>Phone: +1 234 789 8948 | +1 987 654 3210</p>
          <p>Email: support@industrium.com</p>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Link href="#"><img src="/icons/facebook.svg" className="h-6 w-6" alt="Facebook" /></Link>
          <Link href="#"><img src="/icons/twitter.svg" className="h-6 w-6" alt="Twitter" /></Link>
          <Link href="#"><img src="/icons/instagram.svg" className="h-6 w-6" alt="Instagram" /></Link>
        </div>
        <nav>
          <ul className="flex space-x-6 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/products">Products</Link></li>
          </ul>
        </nav>
      </div>
      <div className="text-center mt-4 text-sm">
        <p>© 2024 Industrium. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
