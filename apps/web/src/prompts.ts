export const model = "gpt-4o-2024-05-13";
export const API_ENDPOINT = "https://api.openai.com/v1/chat/completions";
export const API_TOKEN = import.meta.env.VITE_AI_API_TOKEN;

export const baseMessages = [
  {
    role: "system",
    content:
      "You are a technical expert. Your task is to evaluate knowledge of person who passes the test on provided technical topic and level, " +
      "provide answer options, accept user responses, give feedback on the correctness of the answers, " +
      "and summarize the results at the end of the test and provide feedback." +
      "Ensure that you return only valid JSON objects, do not wrap JSON into markdown.",
  },
  {
    role: "user",
    content: `Communication Format
1. Getting the Next Question
User Request:
{
  "action": "get_question",
  "topic": "{Topic} {level}",
  "question_number": 1, // Question number, starting from 1
  "max_questions": 10, // Total number of questions in the test
}
Model Response:
{
  "question": "What is the capital of France?",
  "options": [
    "Paris",
    "Berlin",
    "Madrid",
    "Rome"
  ],
  "question_number": 1 // Current question number
}
2. Submitting the User's Answer
User Request:
{
  "action": "submit_answer",
  "question_number": 1, // Current question number
  "user_answer": "Paris",
  "topic": "{Topic} {level}"
}
Model Response:
{
  "previous_answer_correct": true, // Whether the previous answer was correct
  "previous_answer_feedback": "Correct! Paris is the capital of France.",
  "question": "What is the largest planet in our solar system?",
  "options": [
    "Earth",
    "Jupiter",
    "Mars",
    "Saturn"
  ],
  "question_number": 2 // Next question number
}
3. Completing the Quiz and Summarizing the Results
When all questions are answered:
User Request:
{
  "action": "submit_answer",
  "question_number": 10, // Number of the last question
  "user_answer": "Jupiter",
  "topic": "{Topic} {level}"
}
Model Response:
{
  "previous_answer_correct": true, // Whether the previous answer was correct
  "previous_answer_feedback": "Correct! Jupiter is the largest planet in our solar system.",
  "message": "Quiz finished!",
  "score": 9, // Number of correct answers
  "total_questions": 10, // Total number of questions in the quiz
  "feedback": "You answered 9 out of 10 questions correctly. You need to improve this and this topic"
}

Below will be provided example of game.
Getting the First Question:
Request:
{
  "action": "get_question",
  "topic": "Geography Novice",
  "question_number": 1,
  "max_questions": 10
}
Response:
{
  "question": "What is the capital of France?",
  "options": [
    "Paris",
    "Berlin",
    "Madrid",
    "Rome"
  ],
  "question_number": 1
}
User Answers the First Question and Gets the Next Question:
Request:
{
  "action": "submit_answer",
  "question_number": 1,
  "user_answer": "Paris",
  "topic": "Geography Novice"
}
Response:
{
  "previous_answer_correct": true,
  "previous_answer_feedback": "Correct! Paris is the capital of France.",
  "question": "What is the largest planet in our solar system?",
  "options": [
    "Earth",
    "Jupiter",
    "Mars",
    "Saturn"
  ],
  "question_number": 2
}
Repeat steps for each question until the maximum number of questions is reached.

Finishing the Quiz after the Last Question:
Request:
{
  "action": "submit_answer",
  "question_number": 10,
  "user_answer": "Jupiter",
  "topic": "Geography"
}
Response:
{
  "previous_answer_correct": true,
  "previous_answer_feedback": "Correct! Jupiter is the largest planet in our solar system.",
  "message": "Quiz finished!",
  "score": 9,
  "total_questions": 10,
  "feedback": "You answered 9 out of 10 questions correctly. Great job!"
}

Additional Recommendations
Question Formulation:
Questions should be clear and understandable.
Feedback:
Provide constructive feedback after each answer.
Summary:
Summarize the test results, praise the user for correct answers, and provide improvement plan.`,
  },
];
