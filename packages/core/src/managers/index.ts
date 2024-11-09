import { EventManager } from './EventManager';
import { IManager } from './IManager';
import { ManagerConstructor, ManagerName } from './types';

type ManagerType = ManagerConstructor<IManager> | IManager | EventManager;
class CoreManager {
  private managers: Map<ManagerName, ManagerType> = new Map();
  private readonly eventManager: EventManager;

  constructor() {
    this.eventManager = new EventManager();
    this.managers.set('event', this.eventManager);
  }

  /**
   * 注册Manager
   */
  registerManager<T extends IManager>(name: string, manager: ManagerConstructor<T>):this {
    if (this.managers.has(name)) {
      throw new Error(`Manager ${name} already exists`);
    }
    const managerInstance = new manager(this.eventManager);
    this.managers.set(name, managerInstance);
    return this;
  }

  /**
   * 获取Manager
   */
  getManager<T extends ManagerType>(name: ManagerName): T | undefined {
    return this.managers.get(name) as T;
  }

  /**
   * 替换Manager
   */
  replaceManager<T extends IManager>(
    name: ManagerName,
    Manager: ManagerConstructor<T>
  ): this{
    // 如果Manager不存在，则直接注册
    if (!this.managers.has(name)) {
      this.registerManager(name, Manager);
    } else {
      // 销毁原有Manager
      this.destroyManager(name);
      const newManager = new Manager(this.eventManager);
      this.managers.set(name, newManager);
    }
    return this;
  }

  /**
   * 销毁Manager
   */
  destroyManager(name: ManagerName) {
    const manager = this.managers.get(name);
    if (!manager) {
      return this;
    }
    if (manager instanceof IManager) {
      manager.destroy();
    }
    this.managers.delete(name);
    return this;
  }

  /**
   * 销毁所有Manager
   */
  destroy(){
    this.managers.forEach(manager => {
      if (manager instanceof IManager) {
        manager.destroy();
      }
    });
  }

  /**
   * 初始化Manager
   */
  initManager(name: ManagerName) {
    const manager = this.managers.get(name);
    if (manager instanceof IManager) {
      manager.init();
    }
    return this;
  }

  /**
   * 初始化所有Manager
   */
  init() {
    this.managers.forEach(manager => {
      if (manager instanceof IManager) {
        manager.init();
      }
    });
  }
}

export { CoreManager };
