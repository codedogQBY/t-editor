import { CommandManager } from '../managers/command';
import { SelectionManager } from '../managers/selection';
import { HistoryManager } from '../managers/history';
import { SchemaManager } from '../managers/schema';
import { PluginManager } from '../managers/plugin';
export interface EditorState {
    content: any;
    selection: Selection;
}
export interface Selection {
    anchor: number;
    head: number;
}
export interface Editor {
    state: EditorState;
    commands: CommandManager;
    selection: SelectionManager;
    history: HistoryManager;
    schema: SchemaManager;
    plugins: PluginManager;
    getHTML(): string;
    getText(): string;
}
export interface EditorOptions {
    content?: string;
    plugins?: string[];
}
