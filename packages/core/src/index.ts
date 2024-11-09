import { CoreManager } from './managers';
import { CommandManager } from './managers/command';
import { HistoryManager } from './managers/history';
import { SchemaManager } from './managers/schema';
import { SelectionManager } from './managers/selection';
import { PluginManager } from './managers/plugin';
import { EditorOptions } from './types';
import { registerManager } from './managers/types';


export class Editor {
  private coreManager: CoreManager;

  constructor(options: EditorOptions) {
    this.coreManager = new CoreManager();

    // 注册所有必要的 managers
    // this.coreManager
    //   .registerManager('command', CommandManager)
    //   .registerManager('history', HistoryManager)
    //   .registerManager('schema', SchemaManager)
    //   .registerManager('selection', SelectionManager)
    //   .registerManager('plugin', PluginManager);

    registerManager(this.coreManager);

    // 初始化 CoreManager
    this.coreManager.init();

    // 应用编辑器选项
    this.applyOptions(options);
  }

  private applyOptions(options: EditorOptions) {
    // 设置初始内容
    // if (options.content) {
    //   this.setContent(options.content);
    // }

    // 加载插件
    if (options.plugins) {
      const pluginsManager = this.coreManager.getManager<PluginManager>('plugins');
      options.plugins.forEach(plugin => pluginsManager?.loadPlugin(plugin));
    }
  }

  executeCommand(name: string, ...args: any[]) {
    const commandsManager = this.coreManager.getManager<CommandManager>('commands');
    return commandsManager?.execute(name, ...args);
  }

  getSelection(): any {
    const selectionManager = this.coreManager.getManager<SelectionManager>('selection');
    return selectionManager?.getSelection();
  }

  undo() {
    const historyManager = this.coreManager.getManager<HistoryManager>('history');
    historyManager?.undo();
  }

  redo() {
    const historyManager = this.coreManager.getManager<HistoryManager>('history');
    historyManager?.redo();
  }

  destroy() {
    this.coreManager.destroy();
  }
}
