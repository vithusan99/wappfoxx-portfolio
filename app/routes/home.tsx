import Services from "~/components/Services";
import type { Route } from "./+types/home";
import Hero from "~/components/Hero";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "WappFoxx - Digital Solution" },
    { name: "description", content: "Welcome to WappFoxx!" },
  ];
}

export default function Home() {
  return (
    <>
    <Hero />
    <Services/>
    </>
  );
}
