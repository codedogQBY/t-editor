import { CoreManager } from './index';
import {CommandManager} from './command';
import {HistoryManager} from './history';
import {PluginManager} from './plugin';
import {SchemaManager} from './schema';
import {SelectionManager} from './selection';
import { IManager } from './IManager';

const ManagerKeys = {
  COMMAND: 'command',
  HISTORY: 'history',
  PLUGIN: 'plugin',
  SCHEMA: 'schema',
  SELECTION: 'selection'
} as const;

type DefaultManagerKeys = typeof ManagerKeys[keyof typeof ManagerKeys];

interface TypedCoreManager extends CoreManager {
  getManager(key: 'command'): CommandManager | undefined;
  getManager(key: 'history'): HistoryManager | undefined;
  getManager(key: 'plugin'): PluginManager | undefined;
  getManager(key: 'schema'): SchemaManager | undefined;
  getManager(key: 'selection'): SelectionManager | undefined;
  getManager<T extends IManager>(key: string): T | undefined;
}

export {
  TypedCoreManager,
  ManagerKeys,
  DefaultManagerKeys
};
