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
exports.HistoryManager = void 0;
var IManager_1 = require("../IManager");
var HistoryManager = /** @class */ (function (_super) {
    __extends(HistoryManager, _super);
    function HistoryManager(eventManager) {
        var _this = _super.call(this, eventManager) || this;
        _this.undoStack = [];
        _this.redoStack = [];
        return _this;
    }
    HistoryManager.prototype.init = function () {
        // 初始化历史管理器
    };
    HistoryManager.prototype.destroy = function () {
        this.undoStack = [];
        this.redoStack = [];
    };
    HistoryManager.prototype.push = function (state) {
        this.undoStack.push(state);
        this.redoStack = []; // 清空重做栈
    };
    HistoryManager.prototype.undo = function () {
        if (this.undoStack.length > 1) {
            var current = this.undoStack.pop();
            this.redoStack.push(current);
            return this.undoStack[this.undoStack.length - 1];
        }
        return null;
    };
    HistoryManager.prototype.redo = function () {
        if (this.redoStack.length > 0) {
            var state = this.redoStack.pop();
            this.undoStack.push(state);
            return state;
        }
        return null;
    };
    HistoryManager.MANAGER_NAME = 'history';
    return HistoryManager;
}(IManager_1.IManager));
exports.HistoryManager = HistoryManager;
