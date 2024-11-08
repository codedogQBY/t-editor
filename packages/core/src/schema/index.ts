import { NodeType, Node } from '../type';
class SchemaManager {
  private schema: Schema;

  constructor(schema: Schema) {
    this.schema = schema;
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
