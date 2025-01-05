"use client";

import Hero from "@/components/hero";

import { ReactElement } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Stack from "@/components/stack";
import { Demo } from "@/components/demo";

export default function Page(): ReactElement {
  const { setTheme } = useTheme();

  return (
    <>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <main className="container mx-auto px-4 mt-4">
       <section>
        <Hero />
       </section>
       <section>
        <Stack />
       </section>
        <section>
        </section>
      </main>
    <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        Portafolio
      </h2>
         <div className="relative top-0">
         <Demo />
         </div>
    </>
  );
}
