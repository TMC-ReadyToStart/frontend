import { UserNav } from "@/components/user-nav";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster } from "@/components/ui/toaster";
import Cards, { CardData } from "@/components/cards";
import { CPlain, PythonPlain, JavaPlain } from "devicons-react";

const data: CardData[] = [
  {
    image: CPlain,
    title: "C/C++",
    progress: 0,
    description: "Learn C/C++. Advanced course for experienced programmers",
    is_done: false,
  },
  {
    image: PythonPlain,
    title: "Python",
    progress: 0.5,
    description: "Learn Python basics. A good start for beginners",
    is_done: false,
  },
  {
    image: JavaPlain,
    title: "Java",
    progress: 1,
    description:
      "Get started with Java and Spring Boot. You will learn how to build a REST API",
    is_done: true,
  },
];

const badges: string[] = [
  "https://assets.tryhackme.com/img/badges/king.svg",
  "https://assets.tryhackme.com/img/badges/streak7.svg",
  "https://assets.tryhackme.com/img/badges/streak30.svg",
  "https://assets.tryhackme.com/img/badges/throwback.svg",
  "https://assets.tryhackme.com/img/badges/introtowebsecurity.svg",
];

export default function Quests() {
  return (
    <div className="flex-1 p-8 pt-6 space-y-4 min-h-screen bg-slate-100">
      <div className="flex justify-between items-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Quests 🧙‍♂️</h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
          {/* <Button>Download</Button> */}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Formation en cours
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Challenges restant
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Badges obtenus
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="flex flex-row -space-x-4">
              {badges.map((badge) => {
                return (
                  <img src={badge} className="w-10 rounded-md aspect-square" />
                );
              })}
            </div>

            <p className="text-xs text-muted-foreground">+4 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Challenges réalisé
            </CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">53</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="overflow-x-auto col-span-7">
          <CardHeader>
            <CardTitle>Your quests </CardTitle>
            <CardDescription>Here you can find your quests.</CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <Cards data={data} />
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  );
}
