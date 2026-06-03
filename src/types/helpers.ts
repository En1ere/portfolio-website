import {EProjectCategories, EProjectStatus} from "@/types/project.ts";

export const isHTMLSelect = (target: EventTarget | null): target is HTMLSelectElement => {
  return target instanceof HTMLSelectElement;
};
export const isProjectCategory = (value: string): value is typeof EProjectCategories[keyof typeof EProjectCategories] => {
  return Object.values(EProjectCategories).includes(
    value as typeof EProjectCategories[keyof typeof EProjectCategories]
  );
};
export const isProjectStatus = (value: string): value is typeof EProjectStatus[keyof typeof EProjectStatus] => {
  return Object.values(EProjectStatus).includes(
    value as typeof EProjectStatus[keyof typeof EProjectStatus]
  );
};
