import * as ManagerConfig from './manager.config';
import { IManager } from './IManager';
import { EventManager } from './EventManager';

type ManagerConstructor<T extends IManager> = new (eventManager: EventManager, ...args: any[]) => T;
type ManagerMap = {
  [key in typeof ManagerConfig[keyof typeof ManagerConfig]['MANAGER_NAME']]: ManagerConstructor<IManager>;
};
type DefaultManagerName = keyof ManagerMap;
type ManagerName = DefaultManagerName | string;
type GetManagerByName<T extends ManagerName> = T extends DefaultManagerName ? ManagerMap[T] : ManagerConstructor<IManager>;

export {
  ManagerName,
  DefaultManagerName,
  ManagerMap,
  ManagerConstructor,
  GetManagerByName
};
