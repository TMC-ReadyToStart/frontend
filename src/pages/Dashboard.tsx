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

import { MoocDataTable, MoocElement, MoocState } from "@/components/data-table";
import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Toaster } from "@/components/ui/toaster";
import { toast, useToast } from "@/components/ui/use-toast";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { uploadFile, useStore } from "@/lib/store";

import { backend } from "@/lib/store";
import { convertJsonToMoocElement } from "@/services/moocs.api";

export default function Dashboard() {
  const { toast } = useToast();
  const [data, setData] = useState<MoocElement[]>([]);

  function handleLaunchExerciceGeneration(id: number) {
    console.log("Handle Launch Exercice Generation");
    backend.get(`/upload/${id}`).catch((err) =>
      toast({
        variant: "destructive",
        title: "Oups ! Some silly error happend",
        description: "Internal error catched",
      })
    );
    upload_data();
  }

  function handleRemoveMooc(id: number) {
    console.log("Handle Remove Mooc");
    // upload_data();
  }

  function upload_data() {
    console.log("Uploading Data");
    backend.get("/moocs/all").then((response) => {
      console.log("REPONSE DATA: ", response.data);
      setData(convertJsonToMoocElement(response.data));
    });
  }

  useEffect(() => {
    upload_data();
    setInterval(upload_data, 5000);
  }, []);

  return (
    <div className="flex-1 p-8 pt-6 space-y-4 min-h-screen">
      <div className="flex justify-between items-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Number of Chads
            </CardTitle>
            <span className="text-2xl font-bold">👾</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground text-[#BB432C]">
              +17 since last year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Number of Moocs
            </CardTitle>
            <span className="text-2xl font-bold">📚</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground text-[#BB432C]">
              +3 since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">R2 score</CardTitle>
            <span className="text-2xl font-bold">😎</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">44k</div>
            <p className="text-xs text-muted-foreground text-[#BB432C]">
              +19% since last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row justify-between items-center pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Overall Productivity
            </CardTitle>
            <span className="text-2xl font-bold">📊</span>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground text-[#BB432C]">
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
            <CardDescription className="text-[#BB432C]">
              <span className="font-bold">+20%</span> than last month
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentSales />
          </CardContent>
        </Card>
        <Card className="overflow-x-auto col-span-7">
          <CardHeader className="pb-0">
            <CardTitle>Moocs</CardTitle>
            <div className="flex justify-between items-center space-x-2 w-full">
              You made X tasks this month.
              <UploadMooc />
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

// TODO
export function UploadMooc() {
  const store = useStore();
  const isOpen = store.openMooc;
  const setIsOpen = store.setOpenMooc;

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [automatic, setAutomatic] = useState(false);
  const [, setLevel] = useState(0);

  const toast = useToast();

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          className="ml-4 bg-[#BB432C] hover:bg-[#BB432CCC]"
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
          className="flex justify-center items-center p-4 space-x-2 w-full bg-gray-100 rounded-md border cursor-pointer"
        >
          {file ? file.name : "Choose a file"}
          {file && (
            <Trash
              className="w-5 h-5 ml-3 text-[#BB432C]"
              onClick={(e) => {
                setFile(null);
                e.stopPropagation();
              }}
            />
          )}
        </label>
        {file && (
          <div className="flex flex-col space-y-4 w-full">
            <h2>Configure your MOOC</h2>
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="title">Title:</label>
              <input
                id="title"
                type="text"
                className="px-2 py-1 w-full rounded-md border"
                placeholder="Inspire your people"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={automatic}
              />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <label htmlFor="title">Description:</label>
              <Textarea
                id="description"
                className="px-2 py-1 w-full rounded-md border"
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
                    checked ? setAutomatic(true) : setAutomatic(false);
                  }}
                />
                <label htmlFor="automatic" className="text-sm">
                  Enable automatic description
                </label>
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full">
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
                  <SelectItem value="1">Intermediate</SelectItem>
                  <SelectItem value="2">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-[#BB432C] hover:bg-[#BB432CCC]"
            disabled={!file}
            onClick={async () => {
              if (!file) return;
              uploadFile(file)
                .then((res) => {
                  console.log(res);
                  toast.toast({
                    title: "MOOC uploaded",
                    description: "Your MOOC has been uploaded successfully",
                  });
                })
                .catch((err) => {
                  console.error(err);
                  toast.toast({
                    title: "Error",
                    description: "An error occured while uploading your MOOC",
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
