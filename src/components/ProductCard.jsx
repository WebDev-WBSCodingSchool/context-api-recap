import { addToCart, formatCurrency, removeFromCart } from '@/utils/cartUtils';

const ProductCard = ({ cart, product, setCart }) => {
  const productInCart = cart.find(p => p.id === product.id);

  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure className='bg-white h-48'>
        <img src={product.image} alt={product.title} className='object-cover h-full w-full' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title truncate'>{product.title}</h2>
        <p>{formatCurrency(product.price)} </p>
        <div className='card-actions justify-end items-center'>
          {productInCart ? (
            <>
              <button
                className='btn btn-primary'
                onClick={() => setCart(prev => removeFromCart(prev, product))}
              >
                -
              </button>
              <span> {productInCart.quantity}</span>
              <button
                className='btn btn-primary'
                onClick={() => setCart(prev => addToCart(prev, product))}
              >
                +
              </button>
            </>
          ) : (
            <button
              className='btn btn-primary'
              onClick={() => setCart(prev => addToCart(prev, product))}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
