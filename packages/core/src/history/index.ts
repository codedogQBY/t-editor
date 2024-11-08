import { EditorState } from '../type';
class HistoryManager {
  private undoStack: EditorState[] = [];
  private redoStack: EditorState[] = [];

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
