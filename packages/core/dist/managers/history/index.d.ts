import { EditorState } from '../../types';
import { IManager } from '../IManager';
import { EventManager } from '../EventManager';
declare class HistoryManager extends IManager {
    static readonly MANAGER_NAME: "history";
    private undoStack;
    private redoStack;
    constructor(eventManager: EventManager);
    init(): void;
    destroy(): void;
    push(state: EditorState): void;
    undo(): EditorState | null;
    redo(): EditorState | null;
}
export { HistoryManager };
