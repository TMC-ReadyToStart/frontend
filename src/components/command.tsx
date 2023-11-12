import * as React from "react";
import {
    ArrowUpLeft,
    BookIcon,
    Calculator,
    Calendar,
    CreditCard,
    LayoutDashboard,
    Settings,
    Smile,
    User,
    User2,
} from "lucide-react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { redirect, useLocation, useNavigate } from "react-router";
import { UploadMooc } from "@/pages/Dashboard";
import { useStore } from "@/lib/store";

function CommandDialogSH() {
    const store = useStore();
    const location = useLocation();

    const setOpenMooc = store.setOpenMooc;

    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    return (
        <>
            {/* <p className="text-sm text-muted-foreground">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>J
                </kbd>
            </p> */}
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Locations">
                        <CommandItem
                            onSelect={() => {
                                navigate("/ui/dashboard");
                                setOpen(false);
                            }}
                        >
                            <LayoutDashboard className="w-4 h-4 mr-2" />
                            <span>Dashboard</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                navigate("/ui/profile");
                                setOpen(false);
                            }}
                        >
                            <User2 className="w-4 h-4 mr-2" />
                            <span>Profile</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                navigate("/ui/quests");
                                setOpen(false);
                            }}
                        >
                            <BookIcon className="w-4 h-4 mr-2" />
                            <span>Quests</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem
                            onSelect={() => {
                                setOpen(false);
                                if (location.pathname === "/ui/dashboard") {
                                    setOpenMooc(true);
                                }
                            }}
                        >
                            <ArrowUpLeft className="w-4 h-4 mr-2" />
                            <span>Create Mooc</span>
                            {/* <CommandShortcut>⌘P</CommandShortcut> */}
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}

export default CommandDialogSH;
