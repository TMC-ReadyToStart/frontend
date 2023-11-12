import { CardData } from "@/components/cards";
import { MoocContent, Question } from "@/models/api/moocReponseApi";

import {
  CPlain,
  PythonPlain,
  JavaPlain,
  CplusplusPlain,
  JavascriptPlain,
  PhpPlain,
  RubyPlain,
  CsharpPlain,
} from "devicons-react";

const LookUpTable = {
  python: PythonPlain,
  javascript: JavascriptPlain,
  java: JavaPlain,
  c: CPlain,
  "c++": CplusplusPlain,
  "c#": CsharpPlain,
  php: PhpPlain,
  ruby: RubyPlain,
};

export function convertJsonToCardData(input): CardData[] {
  console.log("INPUT: ", input);
  const data_json = input;
  console.log("DATA JSON: ", data_json);
  let results: CardData[] = [];

  data_json.forEach((data) => {
    results.push({
      id: data.id,
      image: LookUpTable[data.language.toLowerCase()],
      title: data.title,
      progress: data.progress,
      description: data.description,
    });
  });

  console.log("CONVERT JSON: ", results);
  return results;
}

function convertToQuestion(input): Question[] {
  let result: Question[] = [];

  input.forEach((elt) => {
    result.push({
      question: elt.question,
      answer: elt.answer,
      options: elt.mcq,
      type: "mcq",
    });
  });

  return result;
}

export function convertJsonToMoocContent(input): MoocContent[] {
  let results: MoocContent[] = [];

  input.forEach((data) => {
    console.log("DATA CONVERT: ", data);
    results.push({
      id: data.id,
      title: data.title,
      description: data.description,
      percent: data.percent,
      is_exercise: true,
      date: data.date,
      questions: convertToQuestion(data["questions"]),
    });
  });

  return results;
}
