"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.SelectionManager = exports.HistoryManager = exports.SchemaManager = exports.PluginManager = exports.CommandManager = void 0;
var command_1 = require("./command");
__createBinding(exports, command_1, "CommandManager");
var plugin_1 = require("./plugin");
__createBinding(exports, plugin_1, "PluginManager");
var schema_1 = require("./schema");
__createBinding(exports, schema_1, "SchemaManager");
var history_1 = require("./history");
__createBinding(exports, history_1, "HistoryManager");
var selection_1 = require("./selection");
__createBinding(exports, selection_1, "SelectionManager");
