import type { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch("/data/projects.json");
  if (!response.ok) {
    throw new Error("Projeler yüklenirken bir hata oluştu: " + response.statusText);
  }
  const data = await response.json();
  return data as Project[];
}
