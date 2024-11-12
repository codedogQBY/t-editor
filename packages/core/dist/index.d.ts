import { EditorOptions } from './types';
export declare class Editor {
    private readonly coreManager;
    constructor(options: EditorOptions);
    private applyOptions;
    destroy(): void;
}
