import { useContext } from 'react';
import { CartContext } from '@/context';
import { ProductCard } from '@/components';

const Store = () => {
  const { cart, setCart, products } = useContext(CartContext);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {products.map(p => (
        <ProductCard key={p.id} cart={cart} product={p} setCart={setCart} />
      ))}
    </div>
  );
};

export default Store;
