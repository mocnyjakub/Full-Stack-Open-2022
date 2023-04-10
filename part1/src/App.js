import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

const App = () => {
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };
  const course = {
    name: 'Half Stack application development',
    parts: [part1, part2, part3],
  };

  const numberOfExercises = course.parts.reduce(
    (acc, { exercises }) => acc + exercises,
    0
  );

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total numberOfExercises={numberOfExercises} />
    </>
  );
};

export default App;
