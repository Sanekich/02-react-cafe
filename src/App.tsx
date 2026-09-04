import { useState } from 'react'
import CafeInfo from './CafeInfo';
import VoteOptions from './VoteOptions';
import VoteStats from './VoteStats';
import Notification from './Notification';
import './App.css'

function App() {
  
  interface VoteTypes{
    good: number;
    neutral: number;
    bad: number;
  }

  const [VotesExist,SetVotesExist] = useState(false)

  const [votes, setVotes] = useState<VoteTypes>({
      good: 0,
      neutral: 0,
      bad: 0
    }
  );

  type VoteType = 'good' | 'neutral' | 'bad';

  function handleVotes(type: VoteType): void {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));

    SetVotesExist(true)
  }

  function resetVotes(){
    setVotes({
      good:0,
      neutral:0,
      bad:0
    });

    SetVotesExist(false);
  }

  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  return (
    <main className="app">
      <CafeInfo />
      <VoteOptions onVote={handleVotes} onReset={resetVotes} canReset={VotesExist} />
      {VotesExist ?(
      <VoteStats votes = {votes} totalVotes = {totalVotes} positiveRate = {positiveRate} />) : (<Notification />)}
    </main>
  )
}

export default App
