export declare const command = "init [dir]";
export declare const desc = "Initialize a TypeSkript project";
export declare const builder: {
    dir: {
        default: string;
    };
};
export declare function handler(argv: any): void;
