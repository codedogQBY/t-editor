import * as ManagerConfig from '../managers/manager.config';
import { CoreManager } from '../managers';
import { DefaultManagerName } from '../types/managerType';


// 注册默认的Manager
export function registerManagers(coreManager: CoreManager) {
  for (const key in ManagerConfig) {
    const Manager = ManagerConfig[key as DefaultManagerName];
    coreManager.registerManager(Manager.name, Manager);
  }
}
