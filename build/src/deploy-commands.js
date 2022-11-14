"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const path_1 = require("path");
const config_1 = require("./config");
const getJsFiles_1 = __importDefault(require("./utils/getJsFiles"));
const rest = new discord_js_1.REST({ version: "9" }).setToken(config_1.BOT_TOKEN);
const commands = [];
const commandDir = (0, path_1.resolve)(__dirname, "commands");
const commandFiles = (0, getJsFiles_1.default)(commandDir);
for (const file of commandFiles) {
    const command = require((0, path_1.join)(commandDir, file));
    commands.push(command.data.toJSON());
}
const deployCommands = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Started refreshing application (/) commands.");
        yield rest.put(discord_js_1.Routes.applicationCommands(config_1.CLIENT_ID), {
            body: commands,
        });
        console.log("Successfully reloaded application (/) commands.");
    }
    catch (error) {
        console.error(error);
    }
});
deployCommands();
