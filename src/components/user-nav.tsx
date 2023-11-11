import { useStore } from "@/lib/store";
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

export function UserNav() {
    const location = useLocation();

    function getTitleFromLocation(): string {
        const titles = buttons.filter(
            (button) => button.link == location.pathname
        );
        return titles[0]?.title ?? "Quests";
    }

    const [activeButton, setActiveButton] = useState(getTitleFromLocation());

    return (
        <section className="absolute flex flex-col justify-between h-full">
            <div className="flex flex-col w-full gap-5 p-4 pt-5">
                <span className="font-bold text-[18px]">Overview</span>
                <div className="flex flex-col w-full gap-2">
                    {buttons.map((button, idx) => {
                        const ImageButton = button.image;

                        return (
                            <Link
                                key={idx}
                                to={button.link}
                                className={`flex gap-2 gap-y-2 font-medium text-[14px] hover:bg-slate-200  py-2 px-3 pr-5 rounded-lg w-full ${
                                    activeButton === button.title
                                        ? "bg-slate-200"
                                        : ""
                                }`}
                                onClick={() => setActiveButton(button.title)}
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
