import React from 'react';
import { useDrop } from 'react-dnd';
import { moves } from '../Game';

const Square = ({ children, bg, positionCntrl }) => {
  console.log('positionCntrl', positionCntrl);

  const [, drop] = useDrop({
    accept: 'chess',
    drop: (item) => {
      const [formPosition] = item.id.split('_');
      moves(formPosition, positionCntrl);
    }
  });
  return (
    <div
      ref={drop}
      className={`${
        bg ? 'bg-orange-800' : 'bg-orange-200'
      } w-[80px] h-[80px] flex items-center justify-center cursor-grab`}>
      {children}
    </div>
  );
};

export default Square;
