import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{text}</h1>;
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);
const Statistics = ({ text, score }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{score}</td>
    </tr>
  );
};
const totalScore = (good, neutral, bad) => good + neutral + bad;
const averageSore = (good, neutral, bad) => {
  if (good === 0 && neutral === 0 && bad === 0) return 0;
  const numerator = good - bad;
  const denominator = totalScore(good, neutral, bad);
  return numerator / denominator;
};
const percentagePositive = (good, neutral, bad) => {
  if (good === 0) return 0;
  const decimal = (good / totalScore(good, neutral, bad)) * 100;
  return decimal + ' %';
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const setToValue = (setScore, newValue) => {
    setScore(newValue);
  };
  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setToValue(setGood, good + 1)} text='good' />
      <Button
        handleClick={() => setToValue(setNeutral, neutral + 1)}
        text='neutral'
      />
      <Button handleClick={() => setToValue(setBad, bad + 1)} text='bad' />
      <Header text='statistics' />
      <table>
        <tbody>
          <Statistics text='good' score={good} />
          <Statistics text='neutral' score={neutral} />
          <Statistics text='bad' score={bad} />
          <Statistics text='all' score={totalScore(good, neutral, bad)} />
          <Statistics text='average' score={averageSore(good, neutral, bad)} />
          <Statistics
            text='positive'
            score={percentagePositive(good, neutral, bad)}
          />
        </tbody>
      </table>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
