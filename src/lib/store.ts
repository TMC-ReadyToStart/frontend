import { redirect } from "react-router";
import { create } from "zustand";

type QuestionType = "mcq" | "question" | "fill-in-the-blanks";

type Question = {
    type: QuestionType;
    question?: string;
    options?: string[];
    answer?: string;
    text?: string;
    blanks?: string[];
};


interface Store {
    questions: Question[];
    setQuestions: (questions: Question[]) => void;

    validAnswers: number;
    setValidAnswers: (validAnswers: number) => void;

    currentQuestion: number;
    setCurrentQuestion: (currentQuestion: number) => void;
}
export const useStore = create<Store>()((set) => ({
    questions: [
        {
            type: "mcq",
            question: "What is the capital of India?",
            options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
            answer: "New Delhi",
        },
        {
            type: "question",
            question: "What is the capital of India?",
            answer: "New Delhi",
        },
        {
            type: "fill-in-the-blanks",
            text: "The capital of India is ___",
            blanks: ["New Delhi"],
        },
    ],
    setQuestions: (questions) => set({ questions }),

    validAnswers: 0,
    setValidAnswers: (validAnswers) => set({ validAnswers }),
    currentQuestion: 0,
    setCurrentQuestion: (currentQuestion) => set({ currentQuestion }),
}));
