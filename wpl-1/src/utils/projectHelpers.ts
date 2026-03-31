import type { Project, Category, SortField, SortOrder } from "../types/project";

export function applyFilters(
  projects: Project[],
  search: string,
  category: Category | "all",
  sortField: SortField,
  sortOrder: SortOrder
): Project[] {
  let filtered = projects;

  // 1. Search filter
  if (search.trim() !== "") {
    const searchLower = search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.tech.some((t) => t.toLowerCase().includes(searchLower))
    );
  }

  // 2. Category filter
  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  // 3. Sorting
  filtered.sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];

    if (typeof aVal === "string" && typeof bVal === "string") {
      aVal = aVal.toLowerCase();
      bVal = bVal.toLowerCase();
    }

    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  return filtered;
}
