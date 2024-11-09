import { IManager } from '../IManager';
import { EventManager} from '../EventManager';

class SelectionManager extends IManager {
  static  override key = 'selection' as const;

  private currentSelection: Selection | null = null;

  constructor(eventManager: EventManager) {
    super(eventManager);
  }

  init() {
    // 初始化选择管理器
  }

  destroy() {
    this.currentSelection = null;
  }

  updateSelection(selection: Selection) {
    this.currentSelection = selection;
  }

  getSelection(): Selection | null {
    return this.currentSelection;
  }

  hasSelection(): boolean {
    return this.currentSelection !== null && !this.currentSelection.isCollapsed;
  }

  // 其他与选择相关的方法...
}

export { SelectionManager };
