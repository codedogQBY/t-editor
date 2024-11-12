"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.IManager = void 0;
/**
 * Manager基类
 */
var IManager = /** @class */ (function () {
    function IManager(eventManager) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.eventManager = eventManager;
    }
    IManager.prototype.emit = function (event) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.eventManager).emit.apply(_a, __spreadArray([event], args, false));
    };
    IManager.prototype.on = function (event, handler) {
        this.eventManager.on(event, handler);
    };
    IManager.prototype.off = function (event, handler) {
        this.eventManager.off(event, handler);
    };
    return IManager;
}());
exports.IManager = IManager;
