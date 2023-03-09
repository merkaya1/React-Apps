import React from 'react';
import Square from './Square';
import SquareBoard from './SquareBoard';

const Board = ({ board }) => {
  //   console.log(board.flat());

  const colorCntrl = (i) => {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8 - 7));
    // console.log('yyyy', y);
    // console.log('xxx', x);
    return (x + y) % 2 === 0;
  };

  const positionCntrl = (i) => {
    const x = i % 8;
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][x];
    const y = Math.abs(Math.floor(i / 8 - 7));

    return `${letters}${y + 1}`;
  };

  return (
    <div className='w-[672px] h-[672px] bg-amber-900  flex flex-wrap p-4'>
      {board.flat().map((item, index) => (
        <Square key={index} bg={colorCntrl(index)} positionCntrl={positionCntrl(index)}>
          {item && <SquareBoard brd={item} positionCntrl={positionCntrl(index)} />}
        </Square>
      ))}
    </div>
  );
};

export default Board;
