import { NodeType, Node } from '../../types/nodeType';
import { IManager } from '../IManager';
import { EventManager } from '../EventManager';
declare class SchemaManager extends IManager {
    static readonly MANAGER_NAME: "schema";
    private schema;
    constructor(eventManager: EventManager, schema: Schema);
    init(): void;
    destroy(): void;
    isValidNode(node: Node): boolean;
    getAllowedChildren(parentNode: Node): NodeType[];
}
interface Schema {
    isValidNode(node: Node): boolean;
    getAllowedChildren(parentNode: Node): NodeType[];
}
export { SchemaManager, Schema };
