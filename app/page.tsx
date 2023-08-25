import Image from "next/image";
import React from "react";

console.log({ version: React.version });

export default function Home() {
  return <h1>{React.version}</h1>;
}
