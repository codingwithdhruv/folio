import { Badge } from "@/components/ui/badge";
import resume from "@/resume.json";
import { getTranslations } from "next-intl/server";

export const SkillSection = async () => {
  const t = await getTranslations("resume");
  const { skills } = resume;

  return (
    <ul className="mt-4 flex w-full flex-wrap gap-x-2 gap-y-2 md:max-w-xl">
      {skills.map(({ id, nameKey }) => (
        <li key={id}>
          <Badge variant="secondary">{t(nameKey)}</Badge>
        </li>
      ))}
    </ul>
  );
};
