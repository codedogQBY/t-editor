import { NodeType, Node } from '../../types';
import { IManager } from '../IManager';
import { EventManager} from '../EventManager';

class SchemaManager extends IManager {
  public static readonly MANAGER_NAME = 'schema' as const
  private schema: Schema;

  constructor(eventManager: EventManager, schema: Schema) {
    super(eventManager);
    this.schema = schema;
  }

  init() {
    // 初始化模式管理器
  }

  destroy() {
    // 销毁模式管理器
  }

  isValidNode(node: Node): boolean {
    // 检查节点是否符合模式定义
    return this.schema.isValidNode(node);
  }

  getAllowedChildren(parentNode: Node): NodeType[] {
    // 返回允许作为特定节点子节点的节点类型
    return this.schema.getAllowedChildren(parentNode);
  }

  // 其他与模式相关的方法...
}

interface Schema {
  isValidNode(node: Node): boolean;
  getAllowedChildren(parentNode: Node): NodeType[];
  // 其他模式定义...
}

export { SchemaManager, Schema };
