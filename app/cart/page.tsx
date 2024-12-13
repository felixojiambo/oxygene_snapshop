'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { RootState } from '@/store';
import { removeFromCart, updateQuantity } from '@/store/cartSlice';

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = subtotal * (discountPercentage / 100);
  const total = subtotal - discountAmount;

  const handleRemove = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleApplyCoupon = () => {
    const validCoupons: Record<string, number> = {
      'SAVE10': 10,
      'SAVE20': 20
    };
    if (validCoupons[coupon.toUpperCase()]) {
      setDiscountPercentage(validCoupons[coupon.toUpperCase()]);
    } else {
      alert('Invalid coupon code');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <table className="w-full md:w-2/3 table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-[#333]">
                <th className="border px-4 py-2">Product</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Total</th>
                <th className="border px-4 py-2">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td className="border px-4 py-2 flex items-center">
                    <img src={item.image} alt={item.title} className="h-12 w-12 object-contain mr-4" />
                    {item.title}
                  </td>
                  <td className="border px-4 py-2">KSh {item.price.toFixed(2)}</td>
                  <td className="border px-4 py-2">
                    <div className="flex items-center">
                      <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="px-2 border border-gray-300">-</button>
                      <span className="px-2">{item.quantity}</span>
                      <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="px-2 border border-gray-300">+</button>
                    </div>
                  </td>
                  <td className="border px-4 py-2">KSh {(item.price * item.quantity).toFixed(2)}</td>
                  <td className="border px-4 py-2 text-center">
                    <button onClick={() => handleRemove(item.id)} className="text-red-500 hover:text-red-700">
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="md:w-1/3 space-y-4">
            <div className="border p-4 rounded">
              <h2 className="text-xl font-bold mb-2">Cart Totals</h2>
              <p>Subtotal: KSh {subtotal.toFixed(2)}</p>
              {discountPercentage > 0 && <p>Discount: {discountPercentage}%</p>}
              <p className="font-bold">Total: KSh {total.toFixed(2)}</p>
              <button className="w-full bg-[#f26b1d] text-white py-2 rounded mt-4 hover:bg-[#e65a0c]">
                Proceed to Checkout
              </button>
            </div>
            <div className="border p-4 rounded">
              <h2 className="text-xl font-bold mb-2">Coupon Code</h2>
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                className="w-full border p-2 rounded mb-2"
              />
              <button
                onClick={handleApplyCoupon}
                className="w-full bg-[#f26b1d] text-white py-2 rounded hover:bg-[#e65a0c]"
              >
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
