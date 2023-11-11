import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import { useStore } from "@/lib/store";

export default function Result() {
    const store = useStore();

    return (
        <div className="flex items-center justify-center flex-1 min-h-screen bg-green-200">
            <div className="flex flex-col items-center justify-between w-1/2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tight">
                    Well done 👊
                </h2>
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
