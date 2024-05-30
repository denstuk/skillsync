import { Inject, Injectable } from '@nestjs/common';
import { GenerateContentRequest, GenerativeModel } from '@google/generative-ai';
import { Quiz, QuizSection } from './dtos/quiz';

@Injectable()
export class GeminiService {
  constructor(
    @Inject('GEMINI_MODEL') private readonly model: GenerativeModel,
  ) {}

  async generateQuiz(topic: string, numQuestions: number): Promise<Quiz> {
    const request: GenerateContentRequest = {
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: `Provide ${numQuestions} questions for quiz about ${topic}`,
            },
          ],
        },
      ],
      systemInstruction:
        'Generate a quiz about communication formats in a JSON-like format in the answer with questions, answer choices, and a correct answer for each question.',
    };

    const result = await this.model.generateContent(request);
    const response = await result.response;
    const text = response.text();
    const sections = JSON.parse(
      text.trim().replace(/^```json\s+|\s+```$/gm, ''),
    ) as QuizSection[];
    for (const section of sections) {
      if (
        !(
          section.question &&
          Array.isArray(section.choices) &&
          section.correctAnswer
        )
      ) {
        console.log(section);
        throw Error('Generated quiz section is invalid');
      }
    }
    return { sections };
  }
}
