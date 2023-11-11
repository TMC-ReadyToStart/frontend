// import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";
// import { useToast } from "@/components/ui/use-toast";
import ActivityTable from "@/components/quest-table";
import { MoocContent } from "@/models/api/moocReponseApi";
import { useStore } from "@/lib/store";
import { Card, CardContent } from "@/components/ui/card";

const data: MoocContent[] = [
    {
        id: 1,
        title: "Bubble Sort",
        description: "Quick questions on the most used function for sorting",
        percent: 100,
        date: "Sat Nov 11 2023 20:09:20 GMT+0100 (Central European Standard Time)",
        is_exercise: true,
    },

    {
        id: 2,
        title: "Quick Sort",
        percent: 75,
        date: "Sat Nov 11 2023 20:09:20 GMT+0100 (Central European Standard Time)",
        is_exercise: true,
        description: "No one likes it, but it's damn fast",
    },
];

const Quest = () => {
    const store = useStore();
    const navigate = useNavigate();
    // const { toast } = useToast();

    function handleLaunchExercise(id: number) {
        console.log("Handle Launch exercise for ", id);
        console.log("Hello World");
        store.setQuestions([
            {
                question: "Hello World ?",
                type: "mcq",
                answer: "Bah oui",
                options: ["Bah oui", "Bah non", "Mdr", "Youpi"],
            },
        ]);

        navigate(`/learn`);
    }

    return (
        <div className="flex-1 min-h-screen p-8 pt-6 space-y-4">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">
                    {store.questTitle} Quest 🤠
                </h2>
                <div className="flex items-center space-x-2"></div>
            </div>

            <Card>
                <CardContent className="pt-2 overflow-x-auto">
                    <ActivityTable
                        data={data}
                        handleLaunchExercise={handleLaunchExercise}
                    />
                </CardContent>
            </Card>

            <Toaster />
        </div>
    );
};

export default Quest;
