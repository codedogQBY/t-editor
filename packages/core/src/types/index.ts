import { CommandManager } from '../managers/command';
import { SelectionManager } from '../managers/selection';
import { HistoryManager } from '../managers/history';
import { SchemaManager } from '../managers/schema';
import { PluginManager } from '../managers/plugin';
// types.ts
export interface EditorState {
  content: any;
  selection: Selection;
  // 其他状态相关的属性
}

export interface Selection {
  anchor: number;
  head: number;
  // 其他选择相关的属性
}


export interface Editor {
  state: EditorState;
  commands: CommandManager;
  selection: SelectionManager;
  history: HistoryManager;
  schema: SchemaManager;
  plugins: PluginManager;

  getHTML(): string;
  getText(): string;
  // ... 其他方法 ...
}

export interface EditorOptions {
  // 定义编辑器的配置选项
  content?: string;
  plugins?: string[];
  // 其他选项...
}
