import React from 'react';
import Part from './Part';
import Total from './Total';

const Content = ({ parts }) => {
  const total = parts.reduce((accumulator, part) => accumulator + part.exercises, 0);

  console.log(total);

  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercise={part.exercises}></Part>
      ))}
      <Total total={total}></Total>
    </div>
  );
};

export default Content;
