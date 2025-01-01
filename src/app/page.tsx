import Hero from "@/components/hero";

import { ReactElement } from "react";

export default function Page(): ReactElement {
  return (
    <main className="container mx-auto px-4 ">
        <Hero />
    </main>
  );
}