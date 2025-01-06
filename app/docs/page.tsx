import { title } from "@/components/primitives";
import React from "react";
import Pric  from "@/components/Pric"

export default function DocsPage() {
  return (
    <div>
      <h1 className={title()}>Docs</h1>
      <Pric />  

    </div>
  );
}
