"use strict";
exports.__esModule = true;
exports.MarkType = exports.NodeType = void 0;
var NodeType;
(function (NodeType) {
    NodeType["Doc"] = "doc";
    NodeType["Paragraph"] = "paragraph";
    NodeType["Heading"] = "heading";
    NodeType["Blockquote"] = "blockquote";
    NodeType["CodeBlock"] = "code_block";
    NodeType["Text"] = "text";
    NodeType["Image"] = "image";
    NodeType["HardBreak"] = "hard_break";
    NodeType["OrderedList"] = "ordered_list";
    NodeType["BulletList"] = "bullet_list";
    NodeType["ListItem"] = "list_item";
    NodeType["HorizontalRule"] = "horizontal_rule";
    NodeType["Table"] = "table";
    NodeType["TableRow"] = "table_row";
    NodeType["TableCell"] = "table_cell";
})(NodeType || (NodeType = {}));
exports.NodeType = NodeType;
// 使用枚举定义标记类型
var MarkType;
(function (MarkType) {
    MarkType["Strong"] = "strong";
    MarkType["Em"] = "em";
    MarkType["Code"] = "code";
    MarkType["Link"] = "link";
    MarkType["Strike"] = "strike";
    MarkType["Underline"] = "underline";
    MarkType["Superscript"] = "superscript";
    MarkType["Subscript"] = "subscript";
    MarkType["Highlight"] = "highlight";
})(MarkType || (MarkType = {}));
exports.MarkType = MarkType;
