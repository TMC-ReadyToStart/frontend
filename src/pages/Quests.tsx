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
import { Breadcrumb } from "@/components/breadcrumbs";

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
        console.log("Launching use effect");
        backend
            .get("/moocs/all")
            .then((response) => {
                console.log("Axios output");
                setData(convertJsonToCardData(response.data));
            })
            .catch((err) => console.log("ERROR AXIOS :", err));
    }, []);

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
        <div className="flex-1 min-h-screen p-8 pt-6 space-y-4 bg-slate-100">
            <div className="flex items-center justify-between space-y-2">
                <Breadcrumb
                    list={[
                        {
                            title: "Quests 🧙‍♂️",
                            link: "/ui/quests",
                        },
                    ]}
                />
                <div className="flex items-center space-x-2"></div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                            Courses in Progress
                        </CardTitle>
                        <span className="text-2xl font-bold">👨‍💻</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {
                                data.filter(
                                    (d) => d.progress > 0 && d.progress < 100
                                ).length
                            }
                        </div>
                        <p className="text-xs text-muted-foreground">
                            +{" "}
                            {
                                data.filter(
                                    (d) => d.progress > 0 && d.progress < 100
                                ).length
                            }{" "}
                            from last week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                            Remaining Challenges
                        </CardTitle>
                        <span className="text-2xl font-bold">🤔</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {data.filter((d) => d.progress != 100).length}
                        </div>
                        <p className="text-xs text-muted-foreground">
                            + {data.filter((d) => d.progress != 100).length}{" "}
                            from last week
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                            My Badges
                        </CardTitle>
                        <span className="text-2xl font-bold">🏅</span>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-row -space-x-4">
                            {badges.map((badge, idx) => {
                                return (
                                    <img
                                        src={badge}
                                        className="w-10 rounded-md aspect-square"
                                        key={idx}
                                    />
                                );
                            })}
                        </div>

                        <p className="pt-2 text-xs text-muted-foreground">
                            +4 from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                            Completed Quests
                        </CardTitle>
                        <span className="text-2xl font-bold">🎉</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">53</div>
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="col-span-4 overflow-x-auto">
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
