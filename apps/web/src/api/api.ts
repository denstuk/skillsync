import { QuizResult } from "../types";
import { SkillLevel, Task } from "./types";

const API_ENDPOINT = "http://localhost:3000";

type ICreateQuizParams = {
  readonly skill: string;
  readonly level: SkillLevel;
  readonly topics: string[];
};

export const createQuiz = async (
  params: ICreateQuizParams
): Promise<Task[]> => {
  const url = new URL(`${API_ENDPOINT}/api/quiz`);
  return await request<Task[]>(url, {
    method: "POST",
    body: JSON.stringify(params),
  });
};

export const composeQuiz = async (
  params: Omit<ICreateQuizParams, "topics">
): Promise<Task[]> => {
  const url = new URL(`${API_ENDPOINT}/api/quiz`);
  return await request<{ tasks: Task[] }>(url, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    return res.tasks;
  });
};

export type ISubmitQuizParams = {
  readonly tasks: Task[];
  readonly answers: string[];
};

export const submitQuiz = async (
  params: ISubmitQuizParams
): Promise<QuizResult> => {
  const url = new URL(`${API_ENDPOINT}/api/quiz/submit`);
  const body = JSON.stringify(params);
  return await request<QuizResult>(url, {
    method: "POST",
    body,
    headers: new Headers({
      "content-type": "application/json",
    }),
  });
};

const request = async <T>(
  url: string | URL,
  options: RequestInit
): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.statusText}`);
  }

  return response.json();
};
