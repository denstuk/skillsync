import { FC, createContext, PropsWithChildren, useMemo } from "react";

import { useSearchParams } from "react-router-dom";
import { SkillLevel } from "../api/types";

export const SkillAndLevelContext = createContext<{
  skill: string | null;
  level: SkillLevel | null;
}>({ skill: null, level: null });

export const SkillAndLevelProvider: FC<PropsWithChildren> = ({ children }) => {
  const [params] = useSearchParams();
  const [skill, level] = useMemo(() => {
    return [params.get("skill"), params.get("level") as SkillLevel];
  }, [params]);

  return (
    <SkillAndLevelContext.Provider value={{ skill, level }}>
      {children}
    </SkillAndLevelContext.Provider>
  );
};
