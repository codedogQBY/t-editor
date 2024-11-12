"use strict";
exports.__esModule = true;
exports.Editor = void 0;
var managers_1 = require("./managers");
var registerManagers_1 = require("./helpers/registerManagers");
var Editor = /** @class */ (function () {
    function Editor(options) {
        this.coreManager = new managers_1.CoreManager();
        // 注册所有必要的 managers
        (0, registerManagers_1.registerManagers)(this.coreManager);
        // 初始化 CoreManager
        this.coreManager.init();
        // 应用编辑器选项
        this.applyOptions(options);
    }
    Editor.prototype.applyOptions = function (options) {
        // 应用编辑器选项
    };
    Editor.prototype.destroy = function () {
        this.coreManager.destroy();
    };
    return Editor;
}());
exports.Editor = Editor;
