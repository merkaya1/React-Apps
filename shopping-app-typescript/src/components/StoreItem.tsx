import React from 'react';
import { Button, Card } from 'react-bootstrap';

import car from '../assets/images/mustang.jpg';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();
  const quantity = getItemQuantity(id);

  console.log(imgUrl);
  return (
    <>
      <img src={imgUrl} alt='' />
      <Card style={{ height: '100%' }}>
        <Card.Img variant='top' src={imgUrl} alt={name} style={{ objectFit: 'cover' }} />

        <Card.Body className='d-flex flex-column'>
          <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
            <span className='fs-4'>{name}</span>
            <span className='text-muted'>{formatCurrency(price)}</span>
          </Card.Title>
          <div className='mt-auto'>
            {quantity === 0 ? (
              <Button className='w-100 ' onClick={() => increaseCartQuantity(id)}>
                + Add To Cart
              </Button>
            ) : (
              <div className='d-flex align-items-center flex-column gap-2'>
                <div className='d-flex align-items-center justify-content-center gap-2'>
                  <Button className='' onClick={() => decreaseCartQuantity(id)}>
                    -
                  </Button>
                  <div>
                    <span className='fs-2'>{quantity}</span> in cart
                  </div>
                  <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                </div>
                <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>
                  Remove
                </Button>
              </div>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default StoreItem;
