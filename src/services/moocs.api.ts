import { CardData } from "@/components/cards";

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
  const data_json = input["moocs"];
  console.log("DATA JSON: ", data_json);
  let results: CardData[] = [];

  data_json.forEach((data) => {
    results.push({
      id: data.id,
      image: LookUpTable[data.language],
      title: data.title,
      progress: data.progress,
      description: data.description,
    });
  });

  return results;
}
