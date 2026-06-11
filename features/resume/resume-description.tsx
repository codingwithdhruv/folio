import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  CodeIcon,
  Github,
  HomeIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";

import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { type ReactNode } from "react";

export const ResumeDescription = async () => {
  const t = await getTranslations("resume-description");

  return (
    <div className="text-sm">
      <div className="flex flex-col gap-1">
        <div className="flex h-6 w-fit items-center gap-3 p-0 px-3 font-light whitespace-nowrap">
          <Icon className="ml-2">
            <CodeIcon />
          </Icon>
          <span>{t("headline")}</span>
        </div>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-3 p-0 font-light"
        >
          <Link
            href="https://www.google.com/maps/place/Mumbai/"
            rel="noreferrer"
            target="_blank"
          >
            <Icon className="ml-2">
              <HomeIcon />
            </Icon>
            <p>{t("location")}</p>
          </Link>
        </Button>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-3 p-0 font-light"
        >
          <Link href="mailto:techdhruvspace@gmail.com">
            <Icon className="ml-2">
              <MailIcon />
            </Icon>
            <p>{t("email")}</p>
          </Link>
        </Button>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-3 p-0 font-light"
        >
          <Link
            href="https://www.linkedin.com/in/codewithdhruv/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon className="ml-2">
              <LinkedinIcon />
            </Icon>
            <p>{t("linkedin")}</p>
          </Link>
        </Button>
        <Button
          asChild
          variant="link"
          className="flex h-6 w-fit items-center gap-3 p-0 font-light"
        >
          <Link
            href="https://github.com/codingwithdhruv"
            target="_blank"
            rel="noreferrer"
          >
            <Icon className="ml-2">
              <Github />
            </Icon>
            <p>{t("github")}</p>
          </Link>
        </Button>
      </div>
    </div>
  );
};
