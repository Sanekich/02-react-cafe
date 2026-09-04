import { useState } from 'react';
import CafeInfo from '../CafeInfo/CafeInfo';
import Notification from '../Notification/Notification';
import VoteOptions from '../VoteOptions/VoteOptions';
import VoteStats from '../VoteStats/VoteStats';
import type { VoteType, VoteTypes } from '../../types/votes';
import styles from './App.module.css';

function App() {
  const [votes, setVotes] = useState<VoteTypes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;

  function handleVotes(type: VoteType): void {
    setVotes((previousVotes) => ({
      ...previousVotes,
      [type]: previousVotes[type] + 1,
    }));
  }

  function resetVotes(): void {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  }

  return (
    <main className={styles.app}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVotes}
        onReset={resetVotes}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />
      ) : (
        <Notification />
      )}
    </main>
  );
}

export default App;