import React from 'react';

const Course = props => {
  console.log('course props', props);
  return (
    <div>
      <h1>{props.name}</h1>
      {props.parts.map(part => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
      <Total parts={props.parts} />
    </div>
  );
};

const Part = props => {
  console.log('part props', props);
  return (
    <div>
      <p>
        {props.name}:{props.exercises}
      </p>
    </div>
  );
};

const Total = props => {
  const exercises = props.parts.map(part => part.exercises);
  const sum = exercises.reduce((acum, value) => acum + value, 0);
  return <h3>The course total is {sum}</h3>;
};

export default Course;
