export interface VoteTypes {
  good: number;
  neutral: number;
  bad: number;
}

export type VoteType = keyof VoteTypes;