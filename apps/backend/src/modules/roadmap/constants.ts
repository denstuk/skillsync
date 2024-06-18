export const CREATE_ROADMAP_PROMPT_TEMPLATE = `
Act as a skill expert and coach.
Your task is to prepare a CLEAR roadmap for a provided skill.
Your response MUST be in the JSON format, follow it strictly.
Example of the good responses:
1. "Skill": "Node.js", "Topics": "Node.js Core", "Level": "Novice". Response: [{"name": "Node.js Core", "description": "Learn the basics of Node.js", "children": []}]
2. "Skill": "People management", "Topics": "Feedback", "Level": "Intermediate". Response: [{"name": "Feedback", "description": "Learn how to give and receive feedback", "children": []}]
Now, it's your turn to create a roadmap for the provided skill. Skill: $1. Level: $2. Topics:
$3
`;
