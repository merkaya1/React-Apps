import storeItems from '../data/items.json';

import React from 'react';
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../components/StoreItem';

const Store = () => {
  console.log(storeItems);
  return (
    <>
      <h1 className='mb-3'>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map((product) => (
          <Col key={product.id} style={{ minHeight: '200px' }}>
            <StoreItem {...product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
