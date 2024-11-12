import { IManager } from '../IManager';
import { EventManager } from '../EventManager';
interface Command {
    execute(...args: any[]): void;
}
declare class CommandManager extends IManager {
    static readonly MANAGER_NAME: "command";
    private commands;
    constructor(eventManager: EventManager);
    init(): void;
    destroy(): void;
    register(name: string, command: Command): void;
    execute(name: string, ...args: any[]): void;
    canExecute(name: string): boolean;
    getCommand(name: string): Command | undefined;
}
export { CommandManager, Command };
