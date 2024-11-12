declare enum NodeType {
    Doc = "doc",
    Paragraph = "paragraph",
    Heading = "heading",
    Blockquote = "blockquote",
    CodeBlock = "code_block",
    Text = "text",
    Image = "image",
    HardBreak = "hard_break",
    OrderedList = "ordered_list",
    BulletList = "bullet_list",
    ListItem = "list_item",
    HorizontalRule = "horizontal_rule",
    Table = "table",
    TableRow = "table_row",
    TableCell = "table_cell"
}
declare enum MarkType {
    Strong = "strong",
    Em = "em",
    Code = "code",
    Link = "link",
    Strike = "strike",
    Underline = "underline",
    Superscript = "superscript",
    Subscript = "subscript",
    Highlight = "highlight"
}
interface Mark {
    type: MarkType;
    attrs?: Record<string, any>;
}
interface Node {
    type: NodeType;
    attrs?: Record<string, any>;
    content?: Node[];
    marks?: Mark[];
    text?: string;
}
type TextNode = Node & {
    type: NodeType.Text;
    text: string;
};
type ParagraphNode = Node & {
    type: NodeType.Paragraph;
    content: (TextNode | Node)[];
};
type HeadingNode = Node & {
    type: NodeType.Heading;
    attrs: {
        level: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    };
    content: (TextNode | Node)[];
};
type BlockquoteNode = Node & {
    type: NodeType.Blockquote;
    content: (ParagraphNode | Node)[];
};
type CodeBlockNode = Node & {
    type: NodeType.CodeBlock;
    attrs?: {
        language: string;
    };
    content: TextNode[];
};
type ImageNode = Node & {
    type: NodeType.Image;
    attrs: {
        src: string;
        alt?: string;
        title?: string;
    };
};
type HardBreakNode = Node & {
    type: NodeType.HardBreak;
};
type ListItemNode = Node & {
    type: NodeType.ListItem;
    content: (ParagraphNode | Node)[];
};
type OrderedListNode = Node & {
    type: NodeType.OrderedList;
    attrs?: {
        order: number;
    };
    content: ListItemNode[];
};
type BulletListNode = Node & {
    type: NodeType.BulletList;
    content: ListItemNode[];
};
type HorizontalRuleNode = Node & {
    type: NodeType.HorizontalRule;
};
type TableCellNode = Node & {
    type: NodeType.TableCell;
    attrs?: {
        colspan?: number;
        rowspan?: number;
    };
    content: (ParagraphNode | Node)[];
};
type TableRowNode = Node & {
    type: NodeType.TableRow;
    content: TableCellNode[];
};
type TableNode = Node & {
    type: NodeType.Table;
    content: TableRowNode[];
};
type DocNode = Node & {
    type: NodeType.Doc;
    content: (ParagraphNode | HeadingNode | BlockquoteNode | CodeBlockNode | ImageNode | OrderedListNode | BulletListNode | HorizontalRuleNode | TableNode)[];
};
type LinkMark = Mark & {
    type: MarkType.Link;
    attrs: {
        href: string;
        title?: string;
    };
};
type HighlightMark = Mark & {
    type: MarkType.Highlight;
    attrs?: {
        color: string;
    };
};
type ProseMirrorDoc = DocNode;
type AnyNode = DocNode | ParagraphNode | HeadingNode | BlockquoteNode | CodeBlockNode | TextNode | ImageNode | HardBreakNode | OrderedListNode | BulletListNode | ListItemNode | HorizontalRuleNode | TableNode | TableRowNode | TableCellNode;
type AnyMark = Mark | LinkMark | HighlightMark;
export { NodeType, MarkType, Node, TextNode, ParagraphNode, HeadingNode, BlockquoteNode, CodeBlockNode, ImageNode, HardBreakNode, ListItemNode, OrderedListNode, BulletListNode, HorizontalRuleNode, TableCellNode, TableRowNode, TableNode, DocNode, LinkMark, HighlightMark, ProseMirrorDoc, AnyNode, AnyMark };
