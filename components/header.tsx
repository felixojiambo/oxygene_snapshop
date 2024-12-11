import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full relative mb-4">
      <div className="w-full h-60 bg-cover bg-center relative"
        style={{ backgroundImage: 'url("/banner.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Product List</h1>
        </div>
      </div>
      <nav className="bg-black text-white py-2">
        <ul className="flex justify-center space-x-6">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/cart">Cart</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
