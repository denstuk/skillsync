import { Injectable } from '@nestjs/common';
import { GoogleService } from '../../common/google.service';
import { DiagramAnswer, DiagramTask, DiagramTaskResult } from './types';

const TASK_GENERATE_PROMPT = `
  Act as a skill expert. Your task is to create a task for the diagram quiz.
  The task should be clear and unambiguous.
  Your response should be in JSON format, follow it strictly.
  The task should require the user to draw a diagram.
  Your response should be in the following format: { "type": "Diagram", "question": "Question here" }
  Good response examples:
  1. Skill "Microservices". Response: { "type": "Diagram", "question": "Draw a diagram of API Gateway with 2 services" }
  2. Skill "Cache". Response: { "type": "Diagram", "question": "Draw a diagram of a system that should store 1M songs and provide a fast access to the most popular ones" }
  3. Skill "System Design". Response: { "type": "Diagram", "question": "Draw a diagram of a system that should handle 1M requests per second from the IoT devices" }
  4. Skill "Security". Response: { "type": "Diagram", "question": "Design a secure system architecture for e-commerce transactions. Include components for handling user authentication, authorization, and payment processing."}
  5. Skill "architectural patterns(n-Tier, SOA, event-driven architecture, microservices, etc) ". Response: { "type": "Diagram", "question": "Illustrate the difference between a 3-tier and a microservices architecture for a simple product search functionality."}
  Now, it's your turn to create a task for the diagram quiz for the skill "Reliable architectures".
`;

const TASK_RESULT_PROMPT = `
  Act as a skill expert. Your task is to verify an answer for a task for the diagram quiz.
  The explanation should be clear and unambiguous
  Your response should be in JSON format, follow it strictly.
  Your response should be in the following format: { "feedback": "Feedback here", "passed": true }
  You should deeply analyze user's answer and provide a clear result with feedback.
  Good response examples:
  1. Task: { "type": "Diagram", "question": "Draw a diagram of API Gateway with 2 services" }
     Answer: { "type": "Diagram", "answer": "Diagram here" }
     Response: { "feedback": "The diagram is correct. It shows an API Gateway with 2 services", "passed": true }
  2. Task: { "type": "Diagram", "question": "Draw a diagram of a system that should store 1M songs and provide a fast access to the most popular ones" }
      Answer: { "type": "Diagram", "answer": "Diagram here" }
      Response: { "feedback": "The diagram is incorrect. It doesn't show how the system should store 1M songs and provide a fast access to the most popular ones", "passed": false }
`;

@Injectable()
export class DiagramTaskService {
  constructor(private readonly googleService: GoogleService) {}

  async create(): Promise<DiagramTask> {
    const task = await this.googleService.ask(TASK_GENERATE_PROMPT);
    return JSON.parse(task) as DiagramTask;
  }

  async submit({
    task,
    answer,
  }: {
    task: DiagramTask;
    answer: DiagramAnswer;
  }): Promise<DiagramTaskResult> {
    const prompt = [
      TASK_RESULT_PROMPT,
      `Now, it's your turn to create a task for the diagram quiz`,
      `Task: ${task.question}`,
    ].join('\n');

    const result = await this.googleService.ask([
      prompt,
      this.googleService.asBase64Image(answer.image),
    ]);

    return JSON.parse(result) as DiagramTaskResult;
  }
}
