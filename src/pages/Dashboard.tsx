import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { DataTable } from "@/components/data-table";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { uploadFile } from "@/lib/store";

export default function Dashboard() {
    return (
        <div className="flex-1 min-h-screen p-8 pt-6 space-y-4 bg-slate-100">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                        <CardTitle className="text-sm font-medium">
                            Number of Chads
                        </CardTitle>
                        <span className="text-2xl font-bold text-muted-foreground">
                            👾
                        </span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
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
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            <span className="font-bold">+20%</span> than last
                            month
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RecentSales />
                    </CardContent>
                </Card>
                <Card className="col-span-7 overflow-x-auto">
                    <CardHeader className="pb-0">
                        <CardTitle>Moocs</CardTitle>
                        <div className="flex items-center justify-between w-full space-x-2">
                            You made X tasks this month.
                            <UploadMooc open={false} />
                        </div>
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

function UploadMooc({ open }: { open: boolean }) {
    const [isOpen, setIsOpen] = useState(open);

    const [file, setFile] = useState<File | null>(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [automatic, setAutomatic] = useState(false);
    const [level, setLevel] = useState(0);

    const toast = useToast();

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
                <Button
                    onClick={() => {
                        setIsOpen(true);
                    }}
                    className="ml-4"
                >
                    Upload MOOC
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Upload your MOOC</AlertDialogTitle>
                    <AlertDialogDescription>
                        - Please upload your MOOC in ZIP format.
                        <br />- The ZIP file name must be the same as the MOOC
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <input
                    id="file"
                    type="file"
                    accept=".zip"
                    onChange={(e) => {
                        setFile(e.target.files?.[0] ?? null);
                    }}
                    className="hidden"
                />
                <label
                    htmlFor="file"
                    className="flex items-center justify-center w-full p-4 space-x-2 bg-gray-100 border rounded-md cursor-pointer"
                >
                    {file ? file.name : "Choose a file"}
                    {file && (
                        <Trash
                            className="w-5 h-5 ml-3 text-red-500"
                            onClick={(e) => {
                                setFile(null);
                                e.stopPropagation();
                            }}
                        />
                    )}
                </label>
                {file && (
                    <div className="flex flex-col w-full space-y-4">
                        <h2>Configure your MOOC</h2>
                        <div className="flex flex-col w-full space-y-1">
                            <label htmlFor="title">Title:</label>
                            <input
                                id="title"
                                type="text"
                                className="w-full px-2 py-1 border rounded-md"
                                placeholder="Inspire your people"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                disabled={automatic}
                            />
                        </div>
                        <div className="flex flex-col w-full space-y-1">
                            <label htmlFor="title">Description:</label>
                            <Textarea
                                id="description"
                                className="w-full px-2 py-1 border rounded-md"
                                placeholder="Inspire your people"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                disabled={automatic}
                            />
                            <div className="flex items-center pt-1 space-x-2">
                                <Checkbox
                                    id="automatic"
                                    checked={automatic}
                                    onCheckedChange={(checked) => {
                                        checked
                                            ? setAutomatic(true)
                                            : setAutomatic(false);
                                    }}
                                />
                                <label htmlFor="automatic" className="text-sm">
                                    Enable automatic description
                                </label>
                            </div>
                        </div>
                        <div className="flex flex-col w-full space-y-1">
                            <Select
                                onValueChange={(value) => {
                                    setLevel(parseInt(value));
                                }}
                            >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0">Beginner</SelectItem>
                                    <SelectItem value="1">
                                        Intermediate
                                    </SelectItem>
                                    <SelectItem value="2">Advanced</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                )}

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        disabled={!file || !title || !description || !level}
                        onClick={async () => {
                            if (!file) return;
                            uploadFile(file)
                                .then((res) => {
                                    console.log(res);
                                    toast.toast({
                                        title: "MOOC uploaded",
                                        description:
                                            "Your MOOC has been uploaded successfully",
                                    });
                                })
                                .catch((err) => {
                                    console.error(err);
                                    toast.toast({
                                        title: "Error",
                                        description:
                                            "An error occured while uploading your MOOC",
                                    });
                                });
                            setIsOpen(false);
                        }}
                    >
                        Upload
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
