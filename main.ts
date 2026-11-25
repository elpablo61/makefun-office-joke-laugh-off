// One-Line Office Joke Laugh-Off — entry program (Node 22).
// Writes a single one-line office joke to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Rina from HR changed the Wi-Fi password to 'NoMoreQuestions!' and by 10 a.m. eleven people had asked her what the Wi-Fi password is.";

// Gate: /output/entry.txt must be UTF-8 text of 1-200 characters.
const outputPath = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(outputPath, line + "\n", "utf8");
