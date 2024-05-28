import {Question, AnswerResponse, Message} from './types';
import {baseMessages, API_TOKEN, API_ENDPOINT, model} from './prompts.ts';

const getRandomSeed = (): number => {
  return Math.floor(Math.random() * 1000000); // Генерируем случайное число от 0 до 999999
};

let messageHistory: Message[] = [...baseMessages];

export const getQuestion = async (topic: string, questionNumber: number, maxQuestions: number): Promise<Question> => {
  const requestMessage: Message = {
    role: 'user',
    content: JSON.stringify({
      action: 'get_question',
      topic: topic + '- set number ' + getRandomSeed(),
      question_number: questionNumber,
      max_questions: maxQuestions
    })
  };

  messageHistory.push(requestMessage);
  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      seed: getRandomSeed(),
      temperature: 1,
      model: model,
      messages: messageHistory
    })
  });

  const data = await response.json();
  const message = data?.choices[0]?.message
  const responseMessage: Message = message

  messageHistory.push(responseMessage);

  return JSON.parse(message.content);
};

export const submitAnswer = async (questionNumber: number, userAnswer: string, topic: string): Promise<AnswerResponse> => {
  const requestMessage: Message = {
    role: 'user',
    content: JSON.stringify({
      action: 'submit_answer',
      question_number: questionNumber,
      user_answer: userAnswer,
      topic: topic + '- set number ' + getRandomSeed()
    })
  };

  messageHistory.push(requestMessage);

  const response = await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      seed: getRandomSeed(),
      temperature: 1,
      model: model,
      messages: messageHistory
    })
  });

  const data = await response.json();
  const message = data?.choices[0]?.message
  const responseMessage: Message = message;

  messageHistory.push(responseMessage);

  return JSON.parse(message.content);
};

export const resetMessageHistory = (): void => {
  messageHistory = [...baseMessages];
};
