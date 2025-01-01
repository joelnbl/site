'use client';

import React, { ReactElement } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, MapPinHouse, Phone, X } from "lucide-react";
import { useProfileBoundStore } from "@/stores/portfolio";
import Link from 'next/link';
import HeroSkeleton from './skeletons/HeroSkeleton';

const Hero = (): ReactElement => {
    const name = useProfileBoundStore( state => state.name)
    const biography = useProfileBoundStore( state => state.biography )
    const quote = useProfileBoundStore( state => state.quote )
    const location = useProfileBoundStore( state => state.location )
    
    if (name.length === 0) {
      return <HeroSkeleton />
    }

    return (
    <>
    <div className="flex gap-2 justify-between">
      <div>
        <h1 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {name}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {biography}
        </p>

        <div className="flex gap-2 items-center">
          <MapPinHouse size={16} />
          <p className="leading-7">{location}</p>
        </div>

        <blockquote className="mt-6 border-l-2 pl-6 italic">
          &quot;{quote}&quot;
        </blockquote>
      </div>

      <Avatar>
        <AvatarImage src="https://pbs.twimg.com/profile_images/1851756993830158336/w8haeC-w_400x400.jpg" alt="@shadcn" />
        <AvatarFallback>JB</AvatarFallback>
      </Avatar>
      
    </div>

    <div className="flex gap-1 mt-4 space-x-2">
      <a href="mailto:joelumc@gmail.com">
          <Mail size={20}/> 
       </a>
       <a href={`tel:+34628528296`}>
          <Phone size={20}/> 
        </a>
        <Link href="https://www.linkedin.com/in/joelnbl/" target="_blank">
        <Linkedin size={20}/>
        </Link>
        <Link href="https://x.com/joelnbl" target="_blank">
          <X size={20}/> 
        </Link>
        <Link href="https://github.com/joelnbl" target="_blank">
          <Github size={20}/> 
        </Link>
      </div>
    </>
  )
}

export default Hero