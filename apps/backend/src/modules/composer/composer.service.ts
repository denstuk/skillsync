import { Injectable } from '@nestjs/common';
import { GoogleService } from '../common/google.service';
import { TemplateService } from '../common/template.service';
import { ComposerCreateDto } from './dtos/composer-create.dto';
import { ISkillTopic, ITask } from './types';

const LEVELS_EXPLANATION = `
Available levels: "Novice", "Intermediate", "Advanced", "Expert".
Novice - Has a basic understanding of the skill and is able to apply it in simple situations (Mostly theoretical knowledge).
Intermediate - Has a good understanding of the skill and is able to apply it in various situations (Mostly theoretical knowledge with some practical experience).
Advanced - Has a deep understanding of the skill and is able to apply it in complex situations (Theoretical knowledge with practical experience).
Expert - Has a profound understanding of the skill and is able to apply it in any situation (Theoretical knowledge with extensive practical experience).
`;
const TASKS_EXPLANATION = `
You can use following types of tasks: "SingleChoice", "MultipleChoice", "FreeText", "Code", "FixCode", "Diagram".
SingleChoice - A question with a single correct answer.
MultipleChoice - A question with multiple correct answers.
FreeText - A question with a free text answer.
Code - A question with a code answer.
FixCode - A question with a code answer that should be fixed. SEND AS VALID JSON STRING
Diagram - A question with a diagram answer.
`;
const COMPOSER_DECOMPOSITION_TEMPLATE_PROMPT = `
Act as a skill expert. Your task is to decompose a skill into smaller more manageable parts by the provided level.
Your response should be in JSON format, follow it strictly.
${LEVELS_EXPLANATION}
Good response examples:
1. Skill "Node.js". Level "Intermediate". Response:  [{ "name": "Node.js EventLoop", "description": "Understands the core concept of the Node.js EventLoop" }]
2. Skill "React". Level "Advanced". Response: [{ "name": "React Hooks", "description": "Able to write custom hooks" }, { "name": "React Performance", "description": "Understands how to optimize React performance" }]
3. Skill "Docker". Level "Expert". Response: [{ "name": "Docker Networking", "description": "Understands how to configure Docker networking" }, { "name": "Docker Security", "description": "Understands how to secure Docker containers" }]
Now, it's your turn to decompose the skill "$1" into smaller parts by the level "$2".
`;
const COMPOSER_TASK_GENERATION_TEMPLATE_PROMPT = `
Act as a skill expert. Your task is to create a tasks for quiz to check the knowledge of the skill.
The task should be clear and unambiguous.
Your response should be in valid JSON format, without using literal template, follow it strictly.
${LEVELS_EXPLANATION}
You should create a task for each part of the skill topics with description.
${TASKS_EXPLANATION}
You should use appropriate type of task for each part of the skill. For example, for soft skills you should not include "Code", "FixCode", "Diagram" types of tasks. For programming languages you must not include "Diagram" type of tasks. For architecture skills you should not include "Code", "FixCode" types of tasks.
SingleChoice JSON example: { "type": "SingleChoice", "question": "Question here", "options": ["Answer 1", "Answer 2", "Answer 3"], "answer": "Answer 1" }
MultipleChoice JSON example: { "type": "MultipleChoice", "question": "Question here", "options": ["Answer 1", "Answer 2", "Answer 3"], "answer": ["Answer 1", "Answer 2"] }
FreeText JSON example: { "type": "FreeText", "question": "Question here", "answer": ["Correct answer"] }
Code JSON example: { "type": "Code", "question": "Question here", "answer": "Correct code here" }
FixCode JSON example: { "type": "FixCode", "question": "Question here" }
Diagram JSON example: { "type": "Diagram", "question": "Question here" }
You should cover all topics of the skill with minimum possible number of tasks.
Good response examples:
1. Response: [{ "type": "SingleChoice", "question": "What is Node.js?", "options": ["Server-side framework", "JavaScript runtime built on Chrome's V8 JavaScript engine", "Front-end framework"], "answer": "JavaScript runtime built on Chrome's V8 JavaScript engine" }]
2. Response: [{ "type": "MultipleChoice", "question": "What is React?", "options": ["Server-side framework", "JavaScript runtime built on Chrome's V8 JavaScript engine", "Front-end framework"], "answer": ["JavaScript runtime built on Chrome's V8 JavaScript engine", "Front-end framework"] }]
Now, it's your turn to create tasks.
Use following skill topics and descriptions:
$1
`;

@Injectable()
export class ComposerService {
  constructor(
    private readonly googleService: GoogleService,
    private readonly templateService: TemplateService,
  ) {}

  async compose({ skill, level }: ComposerCreateDto): Promise<ITask[]> {
    const prompt = this.templateService.make(
      COMPOSER_DECOMPOSITION_TEMPLATE_PROMPT,
      [skill, level],
    );

    const response = (await this.googleService.ask(prompt))
      .replace(/```json/g, '')
      .replace(/```/g, '');
    const topics = JSON.parse(response) as ISkillTopic[];
    console.log(topics);

    const topicsContext = topics.reduce((acc, topic) => {
      acc += `${topic.name} - ${topic.description}\n`;
      return acc;
    }, '');

    const taskPrompt = this.templateService.make(
      COMPOSER_TASK_GENERATION_TEMPLATE_PROMPT,
      [topicsContext],
    );
    const taskResponse = (await this.googleService.ask(taskPrompt))
      .replace(/```json/g, '')
      .replace(/```/g, '');
    console.log(taskResponse);

    const tasks = JSON.parse(taskResponse) as ITask[];
    return tasks;
  }
}
