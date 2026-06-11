"use client";

import resume from "@/resume.json";
import { useTranslations } from "next-intl";

export const WorkSection = () => {
  const t = useTranslations("resume");
  const { work } = resume;

  return (
    <div className="flex flex-col gap-2">
      {work.map((company) => (
        <div key={company.id} className="flex flex-col gap-1 px-4 py-3">
          <div className="flex w-full flex-row justify-between">
            <h3 className="leading-6">{t(company.nameKey)}</h3>
            <p className="text-xs text-muted-foreground">
              {`${company.startDate} - ${t(company.endDateKey)}`}
            </p>
          </div>
          <p className="text-xs font-light text-muted-foreground">
            {t(company.positionKey)}
          </p>
        </div>
      ))}
    </div>
  );
};
