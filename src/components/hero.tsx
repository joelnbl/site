'use client';

import React, { ReactElement } from 'react'
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPinHouse, Phone, X } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProfileBoundStore } from "@/stores/portfolio";
import HeroSkeleton from './skeletons/HeroSkeleton';

const Hero = (): ReactElement => {
    const name = useProfileBoundStore( state => state.name)
    const biography = useProfileBoundStore( state => state.biography )
    const quote = useProfileBoundStore( state => state.quote )
    const location = useProfileBoundStore( state => state.location )
    const social_networks = useProfileBoundStore( state => state.social_networks )
    const about_me = useProfileBoundStore( state => state.about_me)
    if (name.length === 0) {
      return <HeroSkeleton />
    }

    return (
    <>
    <div className="flex gap-2 justify-between">
      <div>
        <h1 className="mt-6 scroll-m-20 text-4xl tracking-tight transition-colors first:mt-0">
          {name}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {biography}
        </p>

        <div className="flex gap-2 items-center">
          <MapPinHouse size={16} />
          <p className="leading-7">{location}</p>
        </div>

        <blockquote className="mt-4 border-l-2 pl-6 italic">
          &quot;{quote}&quot;
        </blockquote>
      </div>

      <Avatar>
        <AvatarImage src="https://media.licdn.com/dms/image/v2/D4E03AQGHYLaUJyxy8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715201495230?e=1741824000&v=beta&t=9PVZmeIPJm18EvXqdWMCKm1XosSR8YxmDk_8HLN2X8E" alt="@shadcn" />
        <AvatarFallback>JB</AvatarFallback>
      </Avatar>
      
    </div>

    <div className="flex gap-1 mt-6 space-x-2">
      <a href={`mailto:${social_networks.email}`}>
          <Mail size={20}/> 
       </a>
       <a href={`tel:${social_networks.phone}`}>
          <Phone size={20}/> 
        </a>
          <Link href={social_networks.linkedin} target="_blank">
        <Linkedin size={20}/>
        </Link>
        <Link href={social_networks.x} target="_blank">
          <X size={20}/> 
        </Link>
        <Link href={social_networks.github} target="_blank">
          <Github size={20}/> 
        </Link>
      </div>

      <div className='mt-6'>
      <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        Sobre mí
      </h2>
      <p className="leading-7 ">
        {about_me}
      </p>
      </div>
    </>
  )
}

export default Hero