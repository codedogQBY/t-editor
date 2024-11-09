import * as ManagerConfig from './manager.config';
import { CoreManager } from './index';
import { DefaultManagerName } from './types';


// 注册默认的Manager
export function registerManagers(coreManager: CoreManager) {
  for (const key in ManagerConfig) {
    const Manager = ManagerConfig[key as DefaultManagerName];
    coreManager.registerManager(Manager.name, Manager);
  }
}
