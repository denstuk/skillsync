import { SkillLevel, Task, TaskAnswer } from "./types";

const API_ENDPOINT = 'http://localhost:3000';

type ICreateQuizParams = {
  readonly skill: string;
  readonly level: SkillLevel;
  readonly topics: string[];
};

export const createQuiz = async (params: ICreateQuizParams): Promise<Task[]> => {
  const url = new URL(`${API_ENDPOINT}/api/quiz`);
  return await request<Task[]>(url, {
    method: 'POST',
    body: JSON.stringify(params),
  });
};

export const composeQuiz = async (params: Omit<ICreateQuizParams, 'topics'>): Promise<Task[]> => {
  const url = new URL(`${API_ENDPOINT}/api/quiz/composer`);
  return await request<Task[]>(url, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: {
      'Content-Type': 'application/json',
    }
  });
};

type ISubmitQuizParams = {
  readonly tasks: Task[];
  readonly answers: TaskAnswer[];
};

export const submitQuiz = async (params: ISubmitQuizParams): Promise<Task[]> => {
  const url = new URL(`${API_ENDPOINT}/api/quiz/submit`);
  return await request<Task[]>(url, {
    method: 'POST',
    body: JSON.stringify(params),
  });
};

const request = async <T>(url: string | URL, options: RequestInit): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.statusText}`);
  }

  return response.json();
}
