import { Task } from '../../quiz/dtos/quiz.dto';

export class Prompts {
  generateTopics(skill: string, level: string) {
    return `You are the quiz master. Generate only topics for a quiz that assesses "${skill}" skill at an "${level}" level. Your answer must include only topics in the following JSON format: Array of strings.`;
  }

  generateQuiz(skill: string, level: string, topics: string[]) {
    return `
      You are the quiz master. Generate only quiz that includes 20 questions for assesses "${skill}" skill at an "${level}" level. You must use following topics in quiz: ${topics.join(', ')}. Your answer must include only tasks in the following JSON format. Use task format described in these TypeScript interfaces:
      interface BaseTask {
        type: TaskType;
        question: string;
      }

      interface SingleChoiceTask extends BaseTask {
        type: TaskType.SingleChoice;
        options: string[];
      }

      interface MultipleChoiceTask extends BaseTask {
        type: TaskType.MultipleChoice;
        options: string[];
      }

      interface OpenTask extends BaseTask {
        type: TaskType.Open;
      }

      interface CodeTask extends BaseTask {
        type: TaskType.Code;
      }

      interface FixCodeTask extends BaseTask {
        type: TaskType.FixCode;
        content: string;
      }

      type Task =
        | SingleChoiceTask
        | MultipleChoiceTask
        | OpenTask
        | CodeTask
        | FixCodeTask;

      You can use different types of Task that you consider most suitable to cover the topic.
      return valid JSON string with array of Tasks

      NOTE: for FixCodeTask under content field use SNIPPET OF CODE IN PLAIN STRING
    `;
  }

  checkQuizResult(tasks: Task[], answers: string[]) {
    return `
      You are the quiz master. Here description of Task interface on the TypeScript:

        export interface BaseTask {
          type: TaskType;
          question: string;
        }
        export interface SingleChoiceTask extends BaseTask {
          type: TaskType.SingleChoice;
          options: string[];
        }
        export interface MultipleChoiceTask extends BaseTask {
          type: TaskType.MultipleChoice;
          options: string[];
        }
        export interface OpenTask extends BaseTask {
          type: TaskType.Open;
        }
        export interface CodeTask extends BaseTask {
          type: TaskType.Code;
        }
        export interface FixCodeTask extends BaseTask {
          type: TaskType.FixCode;
          content: string;
        }
        export type Task =
          | SingleChoiceTask
          | MultipleChoiceTask
          | OpenTask
          | CodeTask
          | FixCodeTask;

        Here description of Answer type on the TypeScript:
        type Answer = string[];
        You receive an array of Tasks and Answers corresponding to the interfaces posed. Your task is to check the user’s answers to the tasks posed and create a summary of the results that will correspond to the following type:
        export interface Result {
          task: Task;
          answer: string;
          message: string;
        }

        export interface QuizResult {
          totalScore: number;
          score: number;
          recommendations: string;
          results: Result[];
        }
        Description of QuizResult parameters:
        - totalScore : Number of questions
        - score : number of questions the user answered correctly
        - recommendations : recommendations that you can give to the user to close the gaps
        Description of Result parameters:
        - task: the original object of the task
        - answer: the original answer from user
        - message : your verdict on the answer, describe why you think the answer is correct or incorrect

        Array of tasks: ${JSON.stringify(tasks)}

        Array of answers: ${JSON.stringify(answers)}

        Your answer must include only QuizResult in the JSON format.
    `;
  }
}
