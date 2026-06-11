"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import resume from "@/resume.json";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const ProjectSection = () => {
  const t = useTranslations("resume");
  const { projects } = resume;

  return projects.map((project) => {
    const logoSrc = project.id === "algo-trading" ? "/logo/terminal.png" : project.id === "mirroring-engine" ? "/logo/engine.png" : null;

    const ProjectContent = (
      <div className="flex w-full items-start gap-4">
        {logoSrc && (
          <div className="relative mt-1 size-8 shrink-0">
            <Image src={logoSrc} alt={`${project.id} logo`} fill className="rounded-md object-cover" />
          </div>
        )}
        <div className="flex w-full flex-col items-start gap-1">
          <h3 className="leading-6 group-hover:underline">
            {t(project.nameKey)}
          </h3>
          <p className="text-xs font-light text-muted-foreground text-wrap break-words">
            {t(project.descriptionKey)}
          </p>
        </div>
      </div>
    );

    return (
      <Button
        asChild
        className={`flex h-fit w-full items-start p-4 whitespace-normal text-left ${!project.url && "hover:bg-transparent"}`}
        key={project.id}
        variant="ghost"
      >
        {project.url ? (
          <Link href={project.url} rel="noopener noreferrer" target="_blank">
            {ProjectContent}
          </Link>
        ) : (
          ProjectContent
        )}
      </Button>
    );
  });
};
