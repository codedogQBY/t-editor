class CommandManager {
  private commands: Map<string, Command> = new Map();

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
}

interface Command {
  execute(...args: any[]): void;
}

export { CommandManager, Command };
