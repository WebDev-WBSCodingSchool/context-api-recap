import { useState } from 'react';
import { Alert, CartTable } from '@/components';

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 2,
      title: 'Coffee filters',
      price: 12.95,
      description:
        'Our high-quality filters ensure optimal extraction and a smooth, rich cup of coffee.',
      category: 'equipment',
      image: '/filters.webp',
      quantity: 2
    },
    {
      id: 1,
      title: 'Premium coffee beans',
      price: 109.95,
      description:
        'Roasted to perfection, our premium coffee beans are the foundation of a great cup of coffee.',
      category: 'produce',
      image: '/premium-beans.webp',
      quantity: 1
    },
    {
      id: 3,
      title: 'Coffee machine',
      price: 299.95,
      description: 'Our state-of-the-art coffee machine delivers the perfect brew every time.',
      category: 'equipment',
      image: '/machine.webp',
      quantity: 2
    }
  ]);

  if (!cart.length)
    return (
      <div className='mt-5'>
        <Alert message='Your cart is empty :(' />
      </div>
    );

  return <CartTable cart={cart} setCart={setCart} />;
};

export default Cart;
