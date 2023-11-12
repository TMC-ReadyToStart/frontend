import { Toaster } from "@/components/ui/toaster";
import ActivityTable from "@/components/quest-table";
import { MoocContent, Question } from "@/models/api/moocReponseApi";
import { backend, useStore } from "@/lib/store";
import { Card, CardContent } from "@/components/ui/card";
import { Breadcrumb } from "@/components/breadcrumbs";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { convertJsonToMoocContent } from "@/services/moocs.api";

const Quest = () => {
  const store = useStore();
  const navigate = useNavigate();

  const [data, setData] = useState<MoocContent[]>([]);

  useEffect(() => {
    if (store.questTitle == "") navigate("/ui/quests");
    console.log("STORE QUESTITLE: ", store.questTitle);
    backend
      .get("/moocs/content/" + store.questid)
      .then((response) => {
        setData(convertJsonToMoocContent(response.data));
      })
      .catch((err) => console.log("ERROR AXIOS: ", err));
  }, []);

  function handleLaunchExercise(id: number) {
    console.log("Handle Launch exercise for ", id);
    console.log("Hello World");

    let questions: Question[] = data.filter((elt) => elt.id == id)[0].questions;

    store.setQuestions(questions);

    navigate(`/learn`);
  }

  return (
    <div className="flex-1 p-8 pt-6 space-y-4 min-h-screen bg-slate-100">
      <div className="flex justify-between items-center space-y-2">
        <Breadcrumb
          list={[
            {
              title: "Quests",
              link: "/ui/quests",
            },
            {
              title: store.questTitle + " 🤠",
              link: "/ui/quests",
            },
          ]}
        />
        <h2 className="text-3xl font-bold tracking-tight"></h2>
        <div className="flex items-center space-x-2"></div>
      </div>

      <Card>
        <CardContent className="overflow-x-auto pt-2">
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
