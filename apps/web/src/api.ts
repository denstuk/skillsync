import { Question, AnswerResponse, Message, QuestionType } from "./types";
import {
  baseMessages,
  API_TOKEN,
  API_ENDPOINT,
  model,
  baseMessagesCoding,
} from "./prompts.ts";

const getRandomSeed = (): number => {
  return Math.floor(Math.random() * 1000000); // Генерируем случайное число от 0 до 999999
};

const getBaseMessages = (questionType: QuestionType) =>
  questionType === "coding" ? [...baseMessagesCoding] : [...baseMessages];

export class QuizSession {
  questionType: QuestionType;
  messageHistory: Message[];
  topic: string;
  questionNumber: number;
  maxQuestions: number;
  subtopics?: string;

  constructor(
    questionType: QuestionType,
    topic: string,
    maxQuestions: number,
    subtopics: string = ""
  ) {
    this.questionType = questionType;
    this.messageHistory = getBaseMessages(questionType);
    this.topic = topic;
    this.questionNumber = 1;
    this.maxQuestions = maxQuestions;
    this.subtopics = subtopics;
  }

  async getQuestion(): Promise<Question> {
    const requestMessage: Message = {
      role: "user",
      content: JSON.stringify({
        action: "get_question",
        topic: this.topic + "- set number " + getRandomSeed(),
        question_number: this.questionNumber,
        question_type: this.questionType,
        max_questions: this.maxQuestions,
        subtopics: this.subtopics,
      }),
    };

    this.messageHistory.push(requestMessage);

    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        seed: getRandomSeed(),
        temperature: 1,
        model: model,
        messages: this.messageHistory,
      }),
    });

    const data = await response.json();
    const message = data?.choices[0]?.message;
    const responseMessage: Message = message;

    this.messageHistory.push(responseMessage);

    return JSON.parse(message.content);
  }

  async submitAnswer(userAnswer: string): Promise<AnswerResponse> {
    const requestMessage: Message = {
      role: "user",
      content: JSON.stringify({
        action: "submit_answer",
        question_number: this.questionNumber,
        user_answer: userAnswer,
        topic: this.topic + "- set number " + getRandomSeed(),
      }),
    };

    this.messageHistory.push(requestMessage);

    const response = await fetch(API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
      },
      body: JSON.stringify({
        seed: getRandomSeed(),
        temperature: 1,
        model: model,
        messages: this.messageHistory,
      }),
    });

    const data = await response.json();
    const message = data?.choices[0]?.message;
    const responseMessage: Message = message;

    this.messageHistory.push(responseMessage);
    this.questionNumber++;
    return JSON.parse(message.content);
  }
}
