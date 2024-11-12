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
exports.SelectionManager = void 0;
var IManager_1 = require("../IManager");
var SelectionManager = /** @class */ (function (_super) {
    __extends(SelectionManager, _super);
    function SelectionManager(eventManager) {
        var _this = _super.call(this, eventManager) || this;
        _this.currentSelection = null;
        return _this;
    }
    SelectionManager.prototype.init = function () {
        // 初始化选择管理器
    };
    SelectionManager.prototype.destroy = function () {
        this.currentSelection = null;
    };
    SelectionManager.prototype.updateSelection = function (selection) {
        this.currentSelection = selection;
    };
    SelectionManager.prototype.getSelection = function () {
        return this.currentSelection;
    };
    SelectionManager.prototype.hasSelection = function () {
        return this.currentSelection !== null && !this.currentSelection.isCollapsed;
    };
    SelectionManager.MANAGER_NAME = 'selection';
    return SelectionManager;
}(IManager_1.IManager));
exports.SelectionManager = SelectionManager;
