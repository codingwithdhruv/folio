"use client";

import { useTranslations } from "next-intl";

export const DescriptionSection = () => {
  const t = useTranslations("description-section");

  const paragraphs = [
    t("paragraphs.hello"),
    t("paragraphs.craft"),
    t("paragraphs.learn"),
  ];

  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((content, index) => (
        <p key={index}>{content}</p>
      ))}
    </div>
  );
};
