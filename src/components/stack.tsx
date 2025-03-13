"use client";

import React from "react";
import { Icons } from "@/components/ui/icons";

const Stack = () => {
  return (
    <div className="mt-4">
      <h2 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        Habilidades
      </h2>
      <div className="grid grid-cols-3 gap-4 py-4 md:grid-cols-4 lg:grid-cols-6">
        {Object.entries(Icons).map(([name, Icon]) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4"
          >
            <Icon />
            <span className="text-sm text-gray-600">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
