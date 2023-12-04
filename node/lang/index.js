import { franc } from "franc";
import langs from "langs";
import colors from "colors";

const input = process.argv[2];
const langCode = franc(input);
console.log(langCode);
if (langCode === "und") {
  console.log("Discribe more words to get language".red);
} else {
  const language = langs.where("3", langCode);

  console.log(`Language is -> ${language.name}`.green);
}
