import { IManager } from '../IManager';
import { EventManager } from '../EventManager';
declare class SelectionManager extends IManager {
    static readonly MANAGER_NAME: "selection";
    private currentSelection;
    constructor(eventManager: EventManager);
    init(): void;
    destroy(): void;
    updateSelection(selection: Selection): void;
    getSelection(): Selection | null;
    hasSelection(): boolean;
}
export { SelectionManager };
