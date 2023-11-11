import {
<<<<<<< HEAD
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
=======
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
>>>>>>> 14d3174 (exercises)
} from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { DataTable } from "@/components/data-table";
import { Toaster } from "@/components/ui/toaster";

export default function Dashboard() {
<<<<<<< HEAD
  return (
    <div className="flex-1 p-8 pt-6 space-y-4 min-h-screen bg-slate-100">
      <div className="flex justify-between items-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center space-x-2">
          {/* <CalendarDateRangePicker /> */}
          {/* <Button>Download</Button> */}
=======
    return (
        <div className="relative">
            <div className="sticky top-0 left-0 p-2 pt-0 pl-0">
                <div className="absolute flex flex-col h-screen p-4 border shadow-sm bg-background">
                    <h1>TMC</h1>

                    <div className="h-full" />
                    <UserNav />
                </div>
            </div>
            <div className="flex-1 min-h-screen p-8 pt-6 pl-24 space-y-4 bg-slate-100">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Welcome back 👊
                    </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Total Revenue
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
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Subscriptions
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
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Sales
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
                                <rect
                                    width="20"
                                    height="14"
                                    x="2"
                                    y="5"
                                    rx="2"
                                />
                                <path d="M2 10h20" />
                            </svg>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">
                                +19% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                            <CardTitle className="text-sm font-medium">
                                Active Now
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
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">
                                +201 since last hour
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 lg:grid-cols-7">
                    <Card className="col-span-7 lg:col-span-4">
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <Overview />
                        </CardContent>
                    </Card>
                    <Card className="col-span-7 lg:col-span-3">
                        <CardHeader>
                            <CardTitle>Recent Sales</CardTitle>
                            <CardDescription>
                                You made 265 sales this month.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RecentSales />
                        </CardContent>
                    </Card>
                    <Card className="col-span-7 overflow-x-auto">
                        <CardHeader>
                            <CardTitle>Your tasks</CardTitle>
                            <CardDescription>
                                You made X tasks this month.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="w-full">
                            <DataTable />
                        </CardContent>
                    </Card>
                </div>
                <Cards />
                <div className="grid gap-4 lg:grid-cols-8">
                    <Card className="col-span-8 lg:col-span-4">
                        <CardHeader>
                            <CardTitle>SOME_TITLE</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2"></CardContent>
                    </Card>
                    <Card className="col-span-8 lg:col-span-4">
                        <CardHeader>
                            <CardTitle>Ask anything</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative flex flex-col w-full px-0 overflow-hidden max-h-60 grow bg-background sm:rounded-md sm:border sm:px-0">
                                <textarea
                                    tabIndex={0}
                                    rows={1}
                                    placeholder="Send a message."
                                    spellCheck={false}
                                    className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
                                    // style="height: 62px !important;"
                                ></textarea>
                                <div className="absolute right-0 top-4 sm:right-4">
                                    <button
                                        className="inline-flex items-center justify-center w-8 h-8 p-0 text-sm font-medium transition-colors rounded-md shadow-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
                                        type="submit"
                                        data-state="closed"
                                        disabled={false}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 256 256"
                                            fill="currentColor"
                                            className="w-4 h-4"
                                        >
                                            <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z"></path>
                                        </svg>
                                        <span className="sr-only">
                                            Send message
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 lg:grid-cols-8">
                    <Card className="col-span-8 lg:col-span-4">
                        <CardHeader>
                            <CardTitle>Question 2</CardTitle>
                            <CardDescription>
                                <h2 className="pt-2 text-xl">
                                    What is the best Hackathon in the world? 🤔
                                </h2>
                            </CardDescription>
                        </CardHeader>
                        {/* MCQ TEMPLATE */}
                        <CardContent className="space-y-2">
                            {Array.from(Array(4).keys()).map((i) => (
                                <div className="flex space-x-2" key={i}>
                                    <Checkbox id={`checkbox-${i}`} />
                                    <label
                                        htmlFor={`checkbox-${i}`}
                                        className="text-sm"
                                    >
                                        GottaGoHack !!!
                                    </label>
                                </div>
                            ))}

                            <div className="flex flex-row justify-between w-full pt-8">
                                <Button variant="outline">Back</Button>
                                <Button>Next</Button>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-8 lg:col-span-4">
                        <CardHeader>
                            <CardTitle>Question 3</CardTitle>
                            <CardDescription>
                                <h2 className="pt-2 text-xl">
                                    What does the function{" "}
                                    <code className="px-1 py-0.5 text-sm font-mono text-white bg-gray-800 rounded-md">
                                        console.log()
                                    </code>{" "}
                                    do? 😂
                                </h2>
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Textarea
                                className="w-full min-h-[60px]"
                                placeholder="Write your answer here..."
                            />

                            <div className="flex flex-row justify-between w-full pt-8">
                                <Button variant="outline">Back</Button>
                                <Button>Next</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Toaster />
>>>>>>> 14d3174 (exercises)
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
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
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
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
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
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
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
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
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-7">
        <Card className="col-span-7 lg:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-7 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
        <Card className="overflow-x-auto col-span-7">
          <CardHeader>
            <CardTitle>Your tasks</CardTitle>
            <CardDescription>You made X tasks this month.</CardDescription>
          </CardHeader>
          <CardContent className="w-full">
            <DataTable />
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </div>
  );
}
