import { Editor } from '../type';
class PluginManager {
  private plugins: Plugin[] = [];

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

  // 其他插件相关方法...
}

interface Plugin {
  name: string;
  init(editor: Editor): void;
  destroy(): void;
}

export { PluginManager, Plugin };
