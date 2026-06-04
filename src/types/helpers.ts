import { EProjectCategoriesFilter, EProjectStatusesFilter } from "@/types/project.ts";

export const isProjectCategory = (value: string): value is typeof EProjectCategoriesFilter[keyof typeof EProjectCategoriesFilter] => {
  return Object.values(EProjectCategoriesFilter).includes(
    value as typeof EProjectCategoriesFilter[keyof typeof EProjectCategoriesFilter],
  );
};
export const isProjectStatus = (value: string): value is typeof EProjectStatusesFilter[keyof typeof EProjectStatusesFilter] => {
  return Object.values(EProjectStatusesFilter).includes(
    value as typeof EProjectStatusesFilter[keyof typeof EProjectStatusesFilter],
  );
};
