export type Category = "frontend" | "fullstack" | "backend" | "all";
export type SortField = "year" | "title";
export type SortOrder = "asc" | "desc";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  featured?: boolean;
  category: Category;
}
