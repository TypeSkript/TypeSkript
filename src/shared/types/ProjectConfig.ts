import { ProjectType } from "./ProjectType";

export interface ProjectConfig {
    srcDir: string;
    outDir: string;
    pluginsDir: string[];
    type: ProjectType;
}