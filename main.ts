// Your Human in One Word — make.fun entry (program/v1, Node 22, stdlib only).
// Writes the entry word to /output/entry.txt. Never deletes /output itself:
// in the grader it is a mount point, so we only create it if missing and
// write the file inside it.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Micromanager";

// Gate self-check: the sealed scorer requires 1-30 Unicode code points,
// not only white space. Fail loudly instead of writing an invalid entry.
const length = [...WORD].length;
if (length < 1 || length > 30 || WORD.trim().length === 0) {
  throw new Error(`entry word fails the gate: ${length} code points`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`wrote ${length} code points: ${WORD}`);
