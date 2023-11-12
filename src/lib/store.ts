import { create } from "zustand";
import axios from "axios";
import { Question } from "@/models/api/moocReponseApi";

export const backend = axios.create({
  baseURL: "https://063b-163-5-23-68.ngrok-free.app/",
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

export const uploadFile = async (file: File) => {
  return await backend.post("/upload", file, {
    headers: {
      "Content-Type": "application/zip",
    },
  });
};

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

  openMooc: boolean;
  setOpenMooc: (openMooc: boolean) => void;

  currentMooc: number;
  setCurrentMooc: (id: number) => void;

  currentExercice: number;
  setCurrentExercice: (id: number) => void;
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

  openMooc: false,
  setOpenMooc: (openMooc) => set({ openMooc }),

  currentMooc: -1,
  setCurrentMooc: (currentMooc) => set({ currentMooc }),

  currentExercice: -1,
  setCurrentExercice: (currentExercice) => set({ currentExercice }),
}));
