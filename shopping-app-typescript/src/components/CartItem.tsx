import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img src={item.imgUrl} alt={item.name} style={{ width: '125px', height: '75px', objectFit: 'cover' }} />
      <div className='me-auto'>
        <div className='fw-bold '>
          {item.name}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '12px', marginLeft: '10px' }}>
              X{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '14px' }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button variant='outline-danger' size='sm' className='fs-6' onClick={() => removeFromCart(id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
