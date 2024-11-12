"use strict";
exports.__esModule = true;
exports.EventManager = void 0;
var EventManager = /** @class */ (function () {
    function EventManager() {
        this.events = new Map();
    }
    EventManager.prototype.on = function (event, handler) {
        if (!this.events.has(event)) {
            this.events.set(event, new Set());
        }
        this.events.get(event).add(handler);
    };
    EventManager.prototype.off = function (event, handler) {
        if (!this.events.has(event)) {
            return;
        }
        this.events.get(event)["delete"](handler);
    };
    EventManager.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.events.has(event)) {
            return;
        }
        this.events.get(event).forEach(function (handler) {
            handler.apply(void 0, args);
        });
    };
    EventManager.MANAGER_NAME = 'event';
    return EventManager;
}());
exports.EventManager = EventManager;
