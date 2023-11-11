import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import Cards, { CardData } from "@/components/cards";
import { useNavigate } from "react-router";
import { backend, useStore } from "@/lib/store";
import { useEffect, useState } from "react";
import { convertJsonToCardData } from "@/services/moocs.api";

const badges: string[] = [
  "https://assets.tryhackme.com/img/badges/king.svg",
  "https://assets.tryhackme.com/img/badges/streak7.svg",
  "https://assets.tryhackme.com/img/badges/streak30.svg",
  "https://assets.tryhackme.com/img/badges/throwback.svg",
  "https://assets.tryhackme.com/img/badges/introtowebsecurity.svg",
];

export default function Quests() {
  const [data, setData] = useState<CardData[]>([]);

  useEffect(() => {
    backend.get("/moocs/all").then((response) => {
      setData(convertJsonToCardData(response.data));
    });
  });

  const store = useStore();
  const navigate = useNavigate();

  function handleCardClick(id: number) {
    console.log("Handle Card clicked");
    const quest = data.filter((dt) => dt.id == id)[0];

    store.setQuest(id);
    store.setQuestTitle(quest.title);
    navigate("/ui/quest");
  }

  return (
    <div className="flex-1 p-8 pt-6 space-y-4 min-h-screen bg-slate-100">
      <div className="flex justify-between items-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Quests 🧙‍♂️</h2>
        <div className="flex items-center space-x-2"></div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Courses in Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data.filter((d) => d.progress > 0 && d.progress < 100).length}
            </div>
            <p className="text-xs text-muted-foreground">
              + {data.filter((d) => d.progress > 0 && d.progress < 100).length}{" "}
              from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Remaining Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {data.filter((d) => d.progress != 100).length}
            </div>
            <p className="text-xs text-muted-foreground">
              + {data.filter((d) => d.progress != 100).length} from last week
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">My Badges</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row -space-x-4">
              {badges.map((badge) => {
                return (
                  <img src={badge} className="w-10 rounded-md aspect-square" />
                );
              })}
            </div>

            <p className="pt-2 text-xs text-muted-foreground">
              +4 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Completed Quests
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">53</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="overflow-x-auto col-span-4">
          <CardHeader>
            <CardTitle>Your quests </CardTitle>
            <CardDescription>
              Here you can find your daily quests
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <Cards data={data} handleClick={handleCardClick} />
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  );
}
