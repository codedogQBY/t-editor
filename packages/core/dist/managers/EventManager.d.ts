declare class EventManager {
    static readonly MANAGER_NAME: "event";
    private events;
    on(event: string, handler: Function): void;
    off(event: string, handler: Function): void;
    emit(event: string, ...args: any[]): void;
}
export { EventManager };
