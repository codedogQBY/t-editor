"use strict";
exports.__esModule = true;
exports.registerManagers = void 0;
var ManagerConfig = require("../managers/manager.config");
// 注册默认的Manager
function registerManagers(coreManager) {
    for (var key in ManagerConfig) {
        var Manager = ManagerConfig[key];
        coreManager.registerManager(Manager.name, Manager);
    }
}
exports.registerManagers = registerManagers;
