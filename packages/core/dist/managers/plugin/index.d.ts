import { Editor } from '../../types';
import { IManager } from '../IManager';
import { EventManager } from '../EventManager';
declare class PluginManager extends IManager {
    static readonly MANAGER_NAME: "plugin";
    private plugins;
    private readonly editor;
    private pluginMap;
    constructor(eventManager: EventManager, editor: Editor);
    init(): void;
    destroy(): void;
    register(plugin: Plugin): void;
    unregister(pluginName: string): void;
    getPlugin(name: string): Plugin | undefined;
    loadPlugin(name: string): void;
}
interface Plugin {
    name: string;
    init(editor: Editor): void;
    destroy(): void;
}
export { PluginManager, Plugin };
