export interface DiagramTask {
  readonly type: 'Diagram';
  readonly question: string;
}

export interface DiagramAnswer {
  readonly image: string /* base64 */;
}

export type DiagramTaskResult = {
  readonly task: DiagramTask;
  readonly answer: DiagramAnswer;
  readonly feedback: string;
  readonly passed: boolean;
};
