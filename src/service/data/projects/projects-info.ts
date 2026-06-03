import {
  EProjectCategory,
  EProjectStatus,
  type IProject,
} from "@/types/project.ts";

export const projects: IProject[] = [
  {
    id: 1,
    name: "Tamagochi",
    key: "tamagochi",
    status: EProjectStatus.inQueue,
    category: EProjectCategory.game,
    description: "project.tamagochi_description",
    image: "",
  },
  {
    id: 2,
    name: "Very Bad Jokes",
    key: "jokes",
    status: EProjectStatus.inProgress,
    category: EProjectCategory.other,
    description: "project.jokes_description",
    image: "",
  },
  {
    id: 3,
    name: "2D Platformer 'Wizard Adventure'",
    key: "wizard",
    status: EProjectStatus.inQueue,
    category: EProjectCategory.game,
    description: "project.wizard_description",
    image: "",
  },
  {
    id: 4,
    name: "Scientific Calculator",
    key: "calc",
    status: EProjectStatus.inQueue,
    category: EProjectCategory.tool,
    description: "project.calc_description",
    image: "",
  },
]
