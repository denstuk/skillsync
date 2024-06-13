import {
  FC,
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
  useContext,
} from "react";

import { Task } from "../api/types";
import { composeQuiz } from "../api/api";
import { SkillAndLevelContext } from "./SkillAndLevelContext";

export const TasksContext = createContext<{
  tasks: Task[] | null;
  tasksLoading: boolean;
}>({ tasks: null, tasksLoading: true });

export const TasksProvider: FC<PropsWithChildren> = ({ children }) => {
  const { skill, level } = useContext(SkillAndLevelContext);
  const [tasks, setTasks] = useState<Task[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (skill && level) {
      composeQuiz({ skill, level })
        .then((tasks) => {
          setTasks(tasks);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    return () => {
      setTasks(null);
    };
  }, [level, skill]);

  return (
    <TasksContext.Provider value={{ tasks, tasksLoading: loading }}>
      {children}
    </TasksContext.Provider>
  );
};
