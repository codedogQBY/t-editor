import { IManager } from './IManager';
import * as ManagerConfig from './manager.config'


const registerManager = (editor: any) => {
  for (const key in ManagerConfig) {
    const Manager = ManagerConfig[key as keyof typeof ManagerConfig];
    editor.registerManager(Manager.key, Manager);
  }
}

type KeyMap = typeof ManagerConfig[keyof typeof ManagerConfig]['key']
type KeyManagerMap = {
  [key in keyof typeof ManagerConfig as typeof ManagerConfig[key]['key']]: InstanceType<typeof ManagerConfig[key]>
}
type GetManagerByKey<K extends keyof KeyManagerMap> = KeyManagerMap[K]






type GetManager = <K extends KeyMap | ({}&string)>(key: K) => K extends KeyMap ? GetManagerByKey<K> : IManager | undefined

const getManager: GetManager = (key)=> {
  return 1 as any
}

// 内置manager
const ttt =  getManager('command')

// 自定义manager
const sss  = getManager('schemad')


// const  getManager = <T extends ManagerConfig['key']>(key:T): InstanceType<GetStoreByKey<T>> => {

// }

// interface TypedCoreManager extends CoreManager {
//   getManager(key: 'command'): CommandManager | undefined;
//   getManager(key: 'history'): HistoryManager | undefined;
//   getManager(key: 'plugin'): PluginManager | undefined;
//   getManager(key: 'schema'): SchemaManager | undefined;
//   getManager(key: 'selection'): SelectionManager | undefined;
//   getManager<T extends IManager>(key: string): T | undefined;
// }

export {
  registerManager
  // TypedCoreManager,
  // ManagerKeys,
  // DefaultManagerKeys
};
