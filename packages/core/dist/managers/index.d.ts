import { EventManager } from './EventManager';
import { IManager } from './IManager';
import { ManagerConstructor, ManagerName } from '../types/managerType';
type ManagerType = ManagerConstructor<IManager> | IManager | EventManager;
declare class CoreManager {
    private managers;
    private readonly eventManager;
    constructor();
    /**
     * 注册Manager
     */
    registerManager<T extends IManager>(name: string, manager: ManagerConstructor<T>): this;
    /**
     * 获取Manager
     */
    getManager<T extends ManagerType>(name: ManagerName): T | undefined;
    /**
     * 替换Manager
     */
    replaceManager<T extends IManager>(name: ManagerName, Manager: ManagerConstructor<T>): this;
    /**
     * 销毁Manager
     */
    destroyManager(name: ManagerName): this;
    /**
     * 销毁所有Manager
     */
    destroy(): void;
    /**
     * 初始化Manager
     */
    initManager(name: ManagerName): this;
    /**
     * 初始化所有Manager
     */
    init(): void;
}
export { CoreManager };
