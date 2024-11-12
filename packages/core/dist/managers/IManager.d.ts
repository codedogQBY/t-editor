import { EventManager } from './EventManager';
/**
 * Manager基类
 */
declare abstract class IManager {
    static readonly MANAGER_NAME: string;
    private eventManager;
    constructor(eventManager: EventManager, ...args: any[]);
    abstract init(): void;
    abstract destroy(): void;
    protected emit(event: string, ...args: any[]): void;
    protected on(event: string, handler: Function): void;
    protected off(event: string, handler: Function): void;
}
export { IManager };
