import React from 'react';
import { DragPreviewImage, useDrag } from 'react-dnd';

const SquareBoard = ({ brd, positionCntrl }) => {
  const [{ isDragging }, drag, dragPreview] = useDrag({
    type: 'chess',
    item: { id: `${positionCntrl}_${brd.type}_${brd.color}` },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging };
    }
  });

  const pieceImage = require(`../assets/images_chess/${brd.type}_${brd.color}.svg`);
  return (
    <div className='' ref={drag}>
      <DragPreviewImage src={pieceImage} connect={dragPreview} />
      <img className='w-[70px]' src={pieceImage} alt='piece' />
    </div>
  );
};

export default SquareBoard;
