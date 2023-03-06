import { surpriseMePrompts } from "../constants";

export function getRandomPrompts(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];
  //call the function again if the random prompt is the same as the previous random prompt
  if (randomPrompt === prompt) return getRandomPrompts(prompt);

  return randomPrompt;
}
