import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = ({ text }) => <h1>{text}</h1>;
const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const MostVoted = props => {
  if (Math.max(...props.votes) === 0) return <p>Please vote for something</p>;
  return `${props.anecdotes[props.highestIndex]} has the highest votes with ${
    props.votes[props.highestIndex]
  } votes!`;
};

const App = props => {
  const anecdotesLength = props.anecdotes.length;
  const randomIndex = () => {
    const result = Math.floor(Math.random() * anecdotesLength);
    console.log(result);
    return result;
  };
  const [selected, setSelected] = useState(() => randomIndex());
  const [votes, setVotes] = useState(Array(anecdotesLength).fill(0));
  let highestIndex = votes.indexOf(Math.max(...votes));
  return (
    <div>
      <Title text='Anecdote of the day' />
      <div>{props.anecdotes[selected]}</div>
      <Button
        text='vote'
        handleClick={() => {
          const newVote = [...votes];
          newVote[selected] += 1;
          setVotes(newVote);
        }}
      />
      <Button
        text='next anecdote'
        handleClick={() => setSelected(() => randomIndex())}
      />
      <Title text='Anecdote with most votes' />
      <MostVoted
        highestIndex={highestIndex}
        anecdotes={props.anecdotes}
        votes={votes}
      />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
