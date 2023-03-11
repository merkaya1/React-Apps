import React from 'react';
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import shoppingCart from '../assets/svg/shopping-cart-outline-svgrepo-com.svg';
import { RiShoppingCartFill } from 'react-icons/ri';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm mb-3 '>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            className='rounded-circle'
            style={{ width: '3rem', height: '3rem', position: 'relative' }}
            variant='outline-primary'>
            <RiShoppingCartFill className='fs-4' />

            <div
              className='rounded-circle bg-danger d-flex justify-content-center text-white '
              style={{
                position: 'absolute',
                height: '1.5rem',
                width: '1.5rem',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)'
              }}>
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
