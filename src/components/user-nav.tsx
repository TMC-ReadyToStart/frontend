import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookIcon, LayoutDashboardIcon, LogOut, User2 } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface ButtonInt {
  image: any;
  title: string;
  link: string;
}

const buttons: ButtonInt[] = [
  {
    image: LayoutDashboardIcon,
    title: "Dashboard",
    link: "/ui/dashboard",
  },

  {
    image: User2,
    title: "Profile",

    link: "/ui/profile",
  },

  {
    image: BookIcon,
    title: "Quests",

    link: "/ui/quests",
  },

  {
    image: LogOut,
    title: "Logout",
    link: "/login",
  },
];

function getTitleFromLocation(): string {
  const location = useLocation();

  const titles = buttons.filter((button) => button.link == location.pathname);
  return titles[0]?.title ?? "Quests";
}

export function UserNav() {
  const [activeButton, setActiveButton] = useState(getTitleFromLocation());

  return (
    <section className="flex absolute flex-col justify-between h-full">
      <div className="flex flex-col gap-5 p-4 pt-5 w-full">
        <span className="font-bold text-[18px]">Overview</span>
        <div className="flex flex-col gap-2 w-full">
          {buttons.map((button, idx) => {
            let ImageButton = button.image;

            return (
              <Link
                key={idx}
                to={button.link}
                className={`flex gap-2 gap-y-2 font-medium text-[14px] hover:bg-slate-200  py-2 px-3 pr-5 rounded-lg w-full ${
                  activeButton === button.title ? "bg-slate-200" : ""
                }`}
                onClick={(elt) => setActiveButton(button.title)}
              >
                <ImageButton size="20" />
                <span>{button.title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
