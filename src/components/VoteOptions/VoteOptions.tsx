import type { VoteType } from '../../types/votes';
import styles from './VoteOptions.module.css';

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => onVote('good')}>
        Good
      </button>
      <button className={styles.button} onClick={() => onVote('neutral')}>
        Neutral
      </button>
      <button className={styles.button} onClick={() => onVote('bad')}>
        Bad
      </button>
      {canReset && (
        <button className={`${styles.button} ${styles.reset}`} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
}

export default VoteOptions;