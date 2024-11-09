import { CommandManager } from './managers/command';
import { SelectionManager } from './managers/selection';
import { HistoryManager } from './managers/history';
import { SchemaManager } from './managers/schema';
import { PluginManager } from './managers/plugin';
// types.ts
export interface EditorState {
  content: any;
  selection: Selection;
  // 其他状态属性
}

export interface Selection {
  anchor: number;
  head: number;
  // 其他选择相关的属性
}

// types.ts
export interface NodeType {
  name: string;
  attrs?: { [key: string]: any };
  // 可能还有其他属性，如 inline, group 等
}

export interface Node {
  type: NodeType;
  content?: Node[];
  attrs?: { [key: string]: any };
  // 其他节点相关属性
}


export interface Editor {
  state: EditorState;
  commands: CommandManager;
  selection: SelectionManager;
  history: HistoryManager;
  schema: SchemaManager;
  plugins: PluginManager;

  // 核心方法
  dispatch(transaction: Transaction): void;
  getHTML(): string;
  getText(): string;
  // ... 其他方法 ...
}

export interface Transaction {
  // 定义事务的结构
  // 这可能包括对文档的更改、选择的更改等
}

export interface Schema {
  nodes: { [key: string]: NodeSpec };
  marks?: { [key: string]: MarkSpec };
  // 其他 schema 相关属性...
}

export interface NodeSpec {
  // 节点规格的定义
}

export interface MarkSpec {
  // 标记规格的定义
}

export interface EditorOptions {
  // 定义编辑器的配置选项
  content?: string;
  plugins?: string[];
  // 其他选项...
}
