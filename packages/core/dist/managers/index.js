"use strict";
exports.__esModule = true;
exports.CoreManager = void 0;
var EventManager_1 = require("./EventManager");
var IManager_1 = require("./IManager");
var CoreManager = /** @class */ (function () {
    function CoreManager() {
        this.managers = new Map();
        this.eventManager = new EventManager_1.EventManager();
        this.managers.set('event', this.eventManager);
    }
    /**
     * 注册Manager
     */
    CoreManager.prototype.registerManager = function (name, manager) {
        if (this.managers.has(name)) {
            throw new Error("Manager ".concat(name, " already exists"));
        }
        var managerInstance = new manager(this.eventManager);
        this.managers.set(name, managerInstance);
        return this;
    };
    /**
     * 获取Manager
     */
    CoreManager.prototype.getManager = function (name) {
        return this.managers.get(name);
    };
    /**
     * 替换Manager
     */
    CoreManager.prototype.replaceManager = function (name, Manager) {
        // 如果Manager不存在，则直接注册
        if (!this.managers.has(name)) {
            this.registerManager(name, Manager);
        }
        else {
            // 销毁原有Manager
            this.destroyManager(name);
            var newManager = new Manager(this.eventManager);
            this.managers.set(name, newManager);
        }
        return this;
    };
    /**
     * 销毁Manager
     */
    CoreManager.prototype.destroyManager = function (name) {
        var manager = this.managers.get(name);
        if (!manager) {
            return this;
        }
        if (manager instanceof IManager_1.IManager) {
            manager.destroy();
        }
        this.managers["delete"](name);
        return this;
    };
    /**
     * 销毁所有Manager
     */
    CoreManager.prototype.destroy = function () {
        this.managers.forEach(function (manager) {
            if (manager instanceof IManager_1.IManager) {
                manager.destroy();
            }
        });
    };
    /**
     * 初始化Manager
     */
    CoreManager.prototype.initManager = function (name) {
        var manager = this.managers.get(name);
        if (manager instanceof IManager_1.IManager) {
            manager.init();
        }
        return this;
    };
    /**
     * 初始化所有Manager
     */
    CoreManager.prototype.init = function () {
        this.managers.forEach(function (manager) {
            if (manager instanceof IManager_1.IManager) {
                manager.init();
            }
        });
    };
    return CoreManager;
}());
exports.CoreManager = CoreManager;
