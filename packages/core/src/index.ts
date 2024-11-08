import { CommandManager } from './commands';
import { SelectionManager } from './selection';
import { HistoryManager } from './history';
import { SchemaManager } from './schema';
import { PluginManager } from './plugins';
import { Editor as TEditor, EditorState, Schema, EditorOptions, Plugin } from './type';

export class Editor implements TEditor {
  private commandManager: CommandManager;
  private selectionManager: SelectionManager;
  private historyManager: HistoryManager;
  private schemaManager: SchemaManager;
  private pluginManager: PluginManager;

  constructor(options: EditorOptions) {
    this.commandManager = new CommandManager(this);
    this.selectionManager = new SelectionManager(this);
    this.historyManager = new HistoryManager(this);
    this.schemaManager = new SchemaManager(options.schema);
    this.pluginManager = new PluginManager(this);
  }

  // 实现核心方法
  executeCommand(name: string, ...args: any[]) {
    // 实现命令执行逻辑
  }

  // 其他核心方法...
}

export { CommandManager, SelectionManager, HistoryManager, SchemaManager, PluginManager };
