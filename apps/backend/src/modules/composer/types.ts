export enum SkillLevel {
  Novice = 'Novice',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert',
}

export interface ISkillTopic {
  readonly name: string;
  readonly description: string;
}

export interface ITask {
  readonly type: string;
  readonly question: string;
  readonly options?: string[];
  readonly answer?: string | string[];
}
