import { IManager } from '../IManager';
import { EventManager} from '../EventManager';
import { EditorOptions } from '../../types';

class SelectionManager extends IManager {
  public static readonly MANAGER_NAME = 'selection' as const;
  // 编辑器挂载节点
  private editorNode: HTMLElement | null = null;

  constructor(eventManager: EventManager) {
    super(eventManager);
  }

  init() {
    // 初始化选择管理器
  }

  destroy() {
    this.editorNode = null;
  }

  applyOptions(options: EditorOptions) {
    const { id } = options;
    this.editorNode = document.getElementById(id);
  }


  getSelection(): Selection | null {
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || !this.editorNode || !this.editorNode.contains(selection.anchorNode)) {
      return null;
    }
    return selection;
  }

  hasSelection(): boolean {
    const selection = this.getSelection();
    return selection ? !selection.isCollapsed : false;
  }

  // 获取range
  getRange(): Range | null {
    const selection = this.getSelection();
    return selection ? selection.getRangeAt(0) : null;
  }

  // 当前选区对应的节点的mark
  getMarks(): string[] {
    const range = this.getRange();
    if (!range) {
      return [];
    }
    const marks: string[] = [];
    let node = range.startContainer;
    while (node && node !== this.editorNode) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const mark = (node as HTMLElement).dataset.mark;
        if (mark) {
          marks.push(mark);
        }
      }
      node = node.parentNode;
    }
    return marks;
  }
}

export { SelectionManager };
