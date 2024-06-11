export interface IBinaryTask {
  readonly type: 'Binary';
  readonly question: string;
}

export interface IBinaryTaskAnswer {
  readonly answer: boolean;
}

export interface IBinaryTaskResult {
  readonly passed: boolean;
}
