// import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import ActivityTable from "@/components/quest-table";
import { MoocContent } from "@/models/api/moocReponseApi";

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
  const navigate = useNavigate();

  const { toast } = useToast();

  return (
    <div className="w-full">
      <Toaster />
      <div className="flex flex-col w-full md:pt-[30px] gap-10">
        <div className="flex flex-col justify-center space-y-8 w-full md:text-left">
          <h1 className="text-3xl font-bold md:text-4xl">
            Search a malware <span className="text-bordeaux">report</span>
          </h1>
        </div>
        <ActivityTable
          data={data}
          handleScan={(id: number) => console.log("Handle Scan: ", id)}
          handleReport={(id: number) => console.log("Handle Report: ", id)}
          handleDelete={(id: number) => console.log("Handle Delete: ", id)}
        />
      </div>
    </div>
  );
};

export default Quest;
