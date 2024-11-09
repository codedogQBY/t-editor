import { CoreManager } from './managers';
import { EditorOptions } from './types';
import { registerManagers } from './managers/registerManagers';
import { GetManagerByName } from './managers/types';


export class Editor {
  private readonly coreManager: CoreManager;

  constructor(options: EditorOptions) {
    this.coreManager = new CoreManager();

    // 注册所有必要的 managers
    registerManagers(this.coreManager);

    // 初始化 CoreManager
    this.coreManager.init();

    // 应用编辑器选项
    this.applyOptions(options);
  }

  private applyOptions(options: EditorOptions) {}

  executeCommand(name: string, ...args: any[]) {}

  getSelection(): any {}

  undo() {}

  redo() {}

  destroy() {
    this.coreManager.destroy();
  }
}
