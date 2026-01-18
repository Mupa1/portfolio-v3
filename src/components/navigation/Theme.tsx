"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="group relative flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-neutral-700 shadow-lg shadow-primary-500/10 transition-all duration-300 hover:rotate-3 hover:shadow-xl hover:shadow-primary-500/20 focus-visible:outline-none dark:text-foreground-dark-secondary dark:shadow-primary-500/10 dark:hover:shadow-primary-500/20"
          aria-label="Toggle theme"
          aria-haspopup="true"
        >
          <Sun
            className="icon-lg rotate-0 scale-100 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 dark:-rotate-90 dark:scale-0"
            aria-hidden="true"
          />
          <Moon
            className="icon-lg absolute rotate-90 scale-0 transition-all duration-300 group-hover:rotate-3 group-hover:scale-110 dark:rotate-0 dark:scale-100"
            aria-hidden="true"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-[140px]"
        aria-label="Theme options"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          aria-label="Switch to light theme"
          className={`flex items-center gap-2 ${
            theme === "light" ? "bg-primary-50 dark:bg-primary-950/20" : ""
          }`}
        >
          <Sun className="icon-sm" aria-hidden="true" />
          <span className="flex-1 font-medium">Light</span>
          {theme === "light" && (
            <span
              className="text-primary-600 dark:text-primary-400"
              aria-hidden="true"
            >
              ✓
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          aria-label="Switch to dark theme"
          className={`flex items-center gap-2 ${
            theme === "dark" ? "bg-primary-50 dark:bg-primary-950/20" : ""
          }`}
        >
          <Moon className="icon-sm" aria-hidden="true" />
          <span className="flex-1 font-medium">Dark</span>
          {theme === "dark" && (
            <span
              className="text-primary-600 dark:text-primary-400"
              aria-hidden="true"
            >
              ✓
            </span>
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          aria-label="Use system theme"
          className={`flex items-center gap-2 ${
            theme === "system" ? "bg-primary-50 dark:bg-primary-950/20" : ""
          }`}
        >
          <Monitor className="icon-sm" aria-hidden="true" />
          <span className="flex-1 font-medium">System</span>
          {theme === "system" && (
            <span
              className="text-primary-600 dark:text-primary-400"
              aria-hidden="true"
            >
              ✓
            </span>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
