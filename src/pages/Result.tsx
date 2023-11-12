import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { backend, useStore } from "@/lib/store";
import { useEffect } from "react";

export default function Result() {
  const store = useStore();

  useEffect(() => {
    backend.post(`/moocs/content/exo/${store.currentExercice}`, {
      mooc_id: store.questid,
      percent: (store.validAnswers / store.questions.length) * 100,
    });
  }, []);

  if (store.validAnswers === store.questions.length) {
    return (
      <div className="flex flex-1 justify-center items-center min-h-screen bg-green-200">
        <div className="flex flex-col justify-between items-center space-y-4 w-1/2">
          <h2 className="text-3xl font-bold tracking-tight">Well done 👊</h2>
          <div className="flex items-center space-x-2">
            <Link to="/">
              <Button>Go back to dashboard</Button>
            </Link>
          </div>
          <Confetti width={2000} height={2000} />
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Your score is: {store.validAnswers}
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 justify-center items-center min-h-screen bg-red-300">
      <div className="flex flex-col justify-between items-center space-y-4 w-1/2 shake">
        <h2 className="text-3xl font-bold tracking-tight">You failed 😢</h2>
        <div className="flex items-center space-x-2">
          <Link to="/">
            <Button>Go back to dashboard</Button>
          </Link>
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Your score is: {store.validAnswers}
          </h2>
        </div>
      </div>
    </div>
  );
}
