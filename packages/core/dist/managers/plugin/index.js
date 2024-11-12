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
exports.PluginManager = void 0;
var IManager_1 = require("../IManager");
var PluginManager = /** @class */ (function (_super) {
    __extends(PluginManager, _super);
    function PluginManager(eventManager, editor) {
        var _this = _super.call(this, eventManager) || this;
        _this.plugins = [];
        _this.pluginMap = new Map();
        _this.editor = editor;
        return _this;
    }
    PluginManager.prototype.init = function () {
        // 初始化插件管理器
    };
    PluginManager.prototype.destroy = function () {
        this.plugins.forEach(function (plugin) { return plugin.destroy(); });
        this.plugins = [];
    };
    PluginManager.prototype.register = function (plugin) {
        this.plugins.push(plugin);
        plugin.init(this.editor);
    };
    PluginManager.prototype.unregister = function (pluginName) {
        var index = this.plugins.findIndex(function (p) { return p.name === pluginName; });
        if (index !== -1) {
            var plugin = this.plugins[index];
            plugin.destroy();
            this.plugins.splice(index, 1);
        }
    };
    PluginManager.prototype.getPlugin = function (name) {
        return this.plugins.find(function (p) { return p.name === name; });
    };
    PluginManager.prototype.loadPlugin = function (name) {
        var plugin = this.getPlugin(name);
        if (!plugin) {
            throw new Error("Plugin ".concat(name, " not found"));
        }
        // 加载插件
        this.pluginMap.set(name, this.getPlugin(name));
    };
    PluginManager.MANAGER_NAME = 'plugin';
    return PluginManager;
}(IManager_1.IManager));
exports.PluginManager = PluginManager;
