export const EProjectCategory = {
  game: 'game',
  tool: 'tool',
  other: 'other',
} as const;

export const EProjectCategoriesFilter = {
  all: 'all',
  ...EProjectCategory,
} as const;

export const EProjectStatus = {
  published: 'published',
  inProgress: 'inProgress',
  inQueue: 'inQueue',
} as const;

export const EProjectStatusesFilter = {
  all: 'all',
  ...EProjectStatus,
} as const;

export type ProjectCategory = typeof EProjectCategory[keyof typeof EProjectCategory];
export type ProjectCategories = typeof EProjectCategoriesFilter[keyof typeof EProjectCategoriesFilter];
export type ProjectStatus = typeof EProjectStatus[keyof typeof EProjectStatus];

export interface IProject {
  id: number;
  name: string;
  key: string;
  status: ProjectStatus;
  category: ProjectCategory;
  description: string;
  image: string;
}

export type FiltersState = {
  search: string
  category: keyof typeof EProjectCategoriesFilter
  status: keyof typeof EProjectStatusesFilter
}
