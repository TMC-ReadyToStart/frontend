import { create } from "zustand";
import axios from "axios";
import { Question } from "@/models/api/moocReponseApi";

export const backend = axios.create({
  baseURL: "https://1c65-163-5-23-68.ngrok-free.app/",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

interface Store {
  questions: Question[];
  setQuestions: (questions: Question[]) => void;

  validAnswers: number;
  setValidAnswers: (validAnswers: number) => void;

  currentQuestion: number;
  setCurrentQuestion: (currentQuestion: number) => void;

  questid: number;
  setQuest: (id: number) => void;

  questTitle: string;
  setQuestTitle: (title: string) => void;
}

export const useStore = create<Store>()((set) => ({
  questions: [],
  setQuestions: (questions) => set({ questions }),

  validAnswers: 0,
  setValidAnswers: (validAnswers) => set({ validAnswers }),
  currentQuestion: 0,
  setCurrentQuestion: (currentQuestion) => set({ currentQuestion }),

  questid: -1,
  setQuest: (questid) => set({ questid }),

  questTitle: "",
  setQuestTitle: (questTitle) => set({ questTitle }),
}));
