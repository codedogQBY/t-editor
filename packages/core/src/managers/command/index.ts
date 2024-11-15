import { IManager } from '../IManager';
import { EventManager} from '../EventManager';

interface Command {
  execute(...args: any[]): void;
}

class CommandManager extends IManager {
  public static readonly MANAGER_NAME = 'command' as const;
  private commands: Map<string, Command> = new Map();

  constructor(eventManager: EventManager) {
    super(eventManager);
  }

  init() {

  }

  destroy() {
    this.commands.clear();
  }

  register(name: string, command: Command) {
    this.commands.set(name, command);
  }

  execute(name: string, ...args: any[]) {
    const command = this.commands.get(name);
    if (command) {
      return command.execute(...args);
    }
    throw new Error(`Command ${name} not found`);
  }

  canExecute(name: string): boolean {
    return this.commands.has(name);
  }

  getCommand(name: string): Command | undefined {
    return this.commands.get(name);
  }
}


export { CommandManager, Command };
