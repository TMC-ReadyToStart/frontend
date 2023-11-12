import { CardData } from "@/components/cards";
import { MoocDataTable, MoocElement, MoocState } from "@/components/data-table";
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
  const data_json = input;
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

export function convertJsonToMoocElement(input): MoocElement[] {
  let results: MoocElement[] = [];

  input.forEach((data) => {
    results.push({
      id: data.id,
      title: data.title,
      description: data.description,
      haveExercices: data.has_exercise ? MoocState.READY : MoocState.NOT_READY,
    });
  });

  return results;
}

export function convertJsonToMoocContent(input): MoocContent[] {
  let results: MoocContent[] = [];

  input.forEach((data) => {
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
