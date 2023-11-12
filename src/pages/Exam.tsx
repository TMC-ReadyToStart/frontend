import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FillInTheBlanks from "@/components/fill-blanks";
import { useState } from "react";
import { Navigate } from "react-router";
import { useStore } from "@/lib/store";

export default function Exam() {
  const store = useStore();

  if (store.currentQuestion === store.questions.length) {
    store.setCurrentQuestion(0);
    return <Navigate to="/result" />;
  }

  return (
    <div className="">
      <div className="flex flex-1 p-8 pt-6 space-y-4 w-full min-h-screen bg-slate-100">
        <div className="flex flex-1 justify-center items-center">
          <QuestionComponent
            questions={store.questions}
            index={store.currentQuestion}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

function QuestionComponent({ questions, index }) {
  const store = useStore();

  if (store.currentQuestion === questions.length) {
    store.setCurrentQuestion(0);
    return null;
  }

  const question = questions[index];

  switch (question.type) {
    case "mcq":
      return <MCQ key={index} />;
    case "question":
      return <Question key={index} />;
    case "fill-in-the-blanks":
      return <FillInTheBlanksQuestion key={index} />;
    default:
      return null;
  }
}

function MCQ() {
  const store = useStore();
  const questions = store.questions;
  const idx = store.currentQuestion;

  const [answers, setAnswers] = useState<string[]>([]);

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Question {idx + 1}</CardTitle>
        <CardDescription className="pt-2 text-xl">
          {store.questions[store.currentQuestion].question}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-2">
        {questions[idx].options?.map((option, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <Checkbox
              id={`checkbox-${i}`}
              onCheckedChange={(checked) => {
                const newAnswers = [...answers];
                if (checked) {
                  newAnswers.push(option);
                } else {
                  newAnswers.splice(newAnswers.indexOf(option), 1);
                }
                setAnswers(newAnswers);
                console.log(newAnswers);
                console.log(questions[idx].answer?.split(","));
              }}
            />
            <label htmlFor={`checkbox-${i}`} className="text-sm select-none">
              {option}
            </label>
          </div>
        ))}

        <div className="flex flex-row justify-end pt-8 w-full">
          <Button
            onClick={() => {
              store.setCurrentQuestion(store.currentQuestion + 1);
              const ca = questions[idx].answer || "";
              const ca_array = ca.split(",");

              if (ca_array.length === answers.length) {
                let correct = true;
                for (let i = 0; i < ca_array.length; i++) {
                  if (answers.indexOf(ca_array[i]) === -1) {
                    correct = false;
                  }
                }
                if (correct) {
                  store.setValidAnswers(store.validAnswers + 1);
                }
              }
            }}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Question() {
  const store = useStore();
  const [answer, setAnswer] = useState("");

  const questions = store.questions;
  const idx = store.currentQuestion;

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Question 2</CardTitle>
        <CardDescription className="pt-2 text-xl">
          {questions[idx].question}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <Textarea
          className="w-full min-h-[60px]"
          placeholder="Write your answer here..."
          onChange={(e) => setAnswer(e.target.value)}
        />

        <div className="flex flex-row justify-end pt-8 w-full">
          <Button
            onClick={() => {
              store.setCurrentQuestion(store.currentQuestion + 1);
              if (questions[idx].answer === answer) {
                store.setValidAnswers(store.validAnswers + 1);
              }
            }}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function FillInTheBlanksQuestion() {
  const store = useStore();
  const questions = store.questions;
  const idx = store.currentQuestion;
  const blanks = questions[idx].blanks || [];
  const [answers, setAnswers] = useState<string[]>([]);

  const handleChange = (e, index) => {
    const newAnswers = [...answers];
    newAnswers[index] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>Question 3</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <FillInTheBlanks
          text={questions[idx].text}
          blanks={questions[idx].blanks}
          onChange={handleChange}
        />

        <div className="flex flex-row justify-end pt-8 w-full">
          <Button
            onClick={() => {
              store.setCurrentQuestion(store.currentQuestion + 1);
              let blanksCorrect = 0;
              for (let i = 0; i < answers.length; i++) {
                if (answers[i] === blanks[i]) {
                  blanksCorrect++;
                }
              }
              if (blanksCorrect === blanks.length) {
                store.setValidAnswers(store.validAnswers + 1);
              }
            }}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
