export type Mooc = {
  id: number;
  title: string;
  description: string;
  language: string;
};

export type MoocResponse = {
  moocs: Mooc[];
};

export type QuestionType = "mcq" | "question" | "fill-in-the-blanks";

export type Question = {
  question: string;
  type: string;
  answer: string;
  options: string[];
  text?: string;
  blanks?: string[];
};

export type MoocContent = {
  id: number;
  title: string;
  description: string;
  percent: number;
  date: string;
  is_exercise: boolean;
  questions: Question[];
};

export type MoocContentResponse = {
  mooc: Mooc;
  mooc_contents: MoocContent[];
};

export type MoocContentCourse = {
  id: number;
  mooc_content: MoocContent;
  title: string;
  description: string;
  duration: number;
};
