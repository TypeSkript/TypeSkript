import { ProjectType } from "./ProjectType";

export interface ProjectConfig {
    srcDir: string;
    distDir: string;
    pluginsDir: string[];
    type: ProjectType;
}