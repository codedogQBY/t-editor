import { Editor } from '../../types';
import { IManager } from '../IManager';
import { EventManager} from '../EventManager';

class PluginManager extends IManager {
  private plugins: Plugin[] = [];
  private readonly editor: Editor;
  private pluginMap: Map<string, Plugin> = new Map();

  constructor(eventManager: EventManager, editor: Editor) {
    super(eventManager);
    this.editor = editor;
  }

  init() {
    // 初始化插件管理器
  }

  destroy() {
    this.plugins.forEach(plugin => plugin.destroy());
    this.plugins = [];
  }

  register(plugin: Plugin) {
    this.plugins.push(plugin);
    plugin.init(this.editor);
  }

  unregister(pluginName: string) {
    const index = this.plugins.findIndex(p => p.name === pluginName);
    if (index !== -1) {
      const plugin = this.plugins[index];
      plugin.destroy();
      this.plugins.splice(index, 1);
    }
  }

  getPlugin(name: string): Plugin | undefined {
    return this.plugins.find(p => p.name === name);
  }

  loadPlugin(name: string) {
    const plugin = this.getPlugin(name);
    if (!plugin) {
      throw new Error(`Plugin ${name} not found`);
    }
    // 加载插件
    this.pluginMap.set(name, this.getPlugin(name));
  }

  // 其他插件相关方法...
}

interface Plugin {
  name: string;
  init(editor: Editor): void;
  destroy(): void;
}

export { PluginManager, Plugin };
