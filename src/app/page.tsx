'use client';

import type { ReactElement } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, MapPinHouse, Phone, X } from "lucide-react";
import Link from "next/link";

export default function Home(): ReactElement {
  return (
    <div>

    <div className="flex gap-2 justify-between">
      <div>
        <h1 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Joel Nazareth Bello Lara
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Full Stack Developer con más de 6 años de experiencia
        </p>

        <div className="flex gap-2 items-center">
          <MapPinHouse size={16} />
          <p className="leading-7">Galicia, España</p>
        </div>

        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;You can work hard, but if you don’t work smart you will work for
          the rest of your life. Iron Man&quot;
        </blockquote>
      </div>

      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      
    </div>

    <div className="flex gap-1 mt-4 space-x-2">
      <Link href="#" target='_blank'>
          <Mail size={20}/> 
      </Link>
        <Link href="#" target="_blank">
          <Phone size={20}/> 
        </Link>
        <Link href="#" target="_blank">
        <Linkedin size={20}/>
        </Link>
        <Link href="#" target="_blank">
          <X size={20}/> 
        </Link>
        <Link href="#" target="_blank">
          <Github size={20}/> 
        </Link>
      </div>
    </div>
  );
}
