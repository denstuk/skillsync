# @skillsync/backend

## API

**BASE PATH:** /api

### POST /quizzes

**Description:** Creates a new quiz.

**Request Body:**

```json
{
  "topic": "string",
  "numQuestions": "number"
}
```

**Response:**

```json
{
  "quizId": "number"
}
```

###GET /quizzes/:quizId/next-question

**Response:**

```json
{
  "id": "number",
  "question": "string",
  "choices": "string[]"
}
```
***or***
```json
null
```

###GET /quizzes/:quizId/answer

```json
{
  "isCorrect": "boolean"
}
```
