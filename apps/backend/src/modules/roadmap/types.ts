export interface IRoadmapCreate {
  readonly skill: string;
  readonly level: string;
  /** Topics to be included in the roadmap */
  readonly topics: string[];
}

export interface IRoadmapNode {
  readonly name: string;
  readonly description: string;
  readonly children: IRoadmapNode[];
}

export type IRoadmap = IRoadmapNode[];
