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
exports.CommandManager = void 0;
var IManager_1 = require("../IManager");
var CommandManager = /** @class */ (function (_super) {
    __extends(CommandManager, _super);
    function CommandManager(eventManager) {
        var _this = _super.call(this, eventManager) || this;
        _this.commands = new Map();
        return _this;
    }
    CommandManager.prototype.init = function () {
    };
    CommandManager.prototype.destroy = function () {
        this.commands.clear();
    };
    CommandManager.prototype.register = function (name, command) {
        this.commands.set(name, command);
    };
    CommandManager.prototype.execute = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var command = this.commands.get(name);
        if (command) {
            return command.execute.apply(command, args);
        }
        throw new Error("Command ".concat(name, " not found"));
    };
    CommandManager.prototype.canExecute = function (name) {
        return this.commands.has(name);
    };
    CommandManager.prototype.getCommand = function (name) {
        return this.commands.get(name);
    };
    CommandManager.MANAGER_NAME = 'command';
    return CommandManager;
}(IManager_1.IManager));
exports.CommandManager = CommandManager;
