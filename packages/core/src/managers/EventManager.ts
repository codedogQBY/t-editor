class EventManager {
  public static readonly MANAGER_NAME = 'event' as const;
  private events: Map<string, Set<Function>> = new Map();

  public on(event: string, handler: Function): void {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }

    this.events.get(event).add(handler);
  }

  public off(event: string, handler: Function): void {
    if (!this.events.has(event)) {
      return;
    }

    this.events.get(event).delete(handler);
  }

  public emit(event: string, ...args: any[]): void {
    if (!this.events.has(event)) {
      return;
    }

    this.events.get(event).forEach((handler) => {
      handler(...args);
    });
  }
}

export { EventManager };
