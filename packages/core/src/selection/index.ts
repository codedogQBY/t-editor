class SelectionManager {
  private currentSelection: Selection | null = null;

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
