import { EditorState } from '../../types';
import { IManager } from '../IManager';
import { EventManager} from '../EventManager';

class HistoryManager extends IManager {
  static  override key = 'history' as const;
  private undoStack: EditorState[] = [];
  private redoStack: EditorState[] = [];

  constructor(eventManager: EventManager) {
    super(eventManager);
  }

  init() {
    // 初始化历史管理器
  }

  destroy() {
    this.undoStack = [];
    this.redoStack = [];
  }

  push(state: EditorState) {
    this.undoStack.push(state);
    this.redoStack = []; // 清空重做栈
  }

  undo(): EditorState | null {
    if (this.undoStack.length > 1) {
      const current = this.undoStack.pop()!;
      this.redoStack.push(current);
      return this.undoStack[this.undoStack.length - 1];
    }
    return null;
  }

  redo(): EditorState | null {
    if (this.redoStack.length > 0) {
      const state = this.redoStack.pop()!;
      this.undoStack.push(state);
      return state;
    }
    return null;
  }

  // 其他历史相关方法...
}

export { HistoryManager };
