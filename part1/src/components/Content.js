import React from 'react';

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map(({ name, exercises }) => (
        <p key={name}>
          {name} {exercises}
        </p>
      ))}
    </div>
  );
};

export default Content;
