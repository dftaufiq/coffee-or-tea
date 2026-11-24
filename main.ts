import { mkdirSync, writeFileSync } from "node:fs";
// B = tea: the field is ~95% coffee, so the smaller B field has the better odds.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "B");
