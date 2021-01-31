import ts, { CompilerOptions } from "typescript";
import { ProjectConfig } from "../shared/types/ProjectConfig";

export class Project {
    private readonly _config: ProjectConfig;
    private readonly _compilerOptions: CompilerOptions;

    constructor(config: ProjectConfig) {
        this._config = {...config};
        this._compilerOptions = {
            allowSyntheticDefaultImports: true,
            noLib: true,
            strict: true,
            target: ts.ScriptTarget.ESNext,
            moduleResolution: ts.ModuleResolutionKind.NodeJs,
            typeRoots: this._config.pluginsDir,
            resolveJsonModule: true,
            rootDir: this._config.srcDir,
            outDir: this._config.outDir
        };
    }

    get config() {
        return this._config;
    }
}