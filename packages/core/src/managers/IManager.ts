import { EventManager} from './EventManager';

/**
 * Manager基类
 */
abstract class IManager {
  public static readonly MANAGER_NAME: string;
  private eventManager: EventManager;

  constructor(eventManager: EventManager, ...args: any[]) {
    this.eventManager = eventManager;
  }

  abstract init(): void;
  abstract destroy(): void;

  protected emit(event: string, ...args: any[]): void {
    this.eventManager.emit(event, ...args);
  }

  protected on(event: string, handler: Function): void {
    this.eventManager.on(event, handler);
  }

  protected off(event: string, handler: Function): void {
    this.eventManager.off(event, handler);
  }

}

export { IManager };
