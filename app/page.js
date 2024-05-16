import { ProjectCard } from "@/components/ProjectCard";
import "../public/fonts/Avenir-Light.ttf";
import "../public/fonts/Avenir-Book.ttf";
import "../public/fonts/Avenir-Roman.ttf";
import "../public/fonts/Avenir-Medium.ttf";
import "../public/fonts/Avenir-Heavy.ttf";
import "../public/fonts/Avenir-Black.ttf";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="w-full  flex flex-wrap gap-5 justify-center items-center ">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}