"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
function getJsFiles(dir) {
    const files = (0, fs_1.readdirSync)(dir).filter((file) => file.endsWith(".js"));
    return files;
}
exports.default = getJsFiles;
