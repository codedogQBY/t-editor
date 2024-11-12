"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SchemaManager = void 0;
var IManager_1 = require("../IManager");
var SchemaManager = /** @class */ (function (_super) {
    __extends(SchemaManager, _super);
    function SchemaManager(eventManager, schema) {
        var _this = _super.call(this, eventManager) || this;
        _this.schema = schema;
        return _this;
    }
    SchemaManager.prototype.init = function () {
        // 初始化模式管理器
    };
    SchemaManager.prototype.destroy = function () {
        // 销毁模式管理器
    };
    SchemaManager.prototype.isValidNode = function (node) {
        // 检查节点是否符合模式定义
        return this.schema.isValidNode(node);
    };
    SchemaManager.prototype.getAllowedChildren = function (parentNode) {
        // 返回允许作为特定节点子节点的节点类型
        return this.schema.getAllowedChildren(parentNode);
    };
    SchemaManager.MANAGER_NAME = 'schema';
    return SchemaManager;
}(IManager_1.IManager));
exports.SchemaManager = SchemaManager;
