"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const app_1 = require("./app/app");
const electron_events_1 = require("./app/events/electron.events");
const squirrel_events_1 = require("./app/events/squirrel.events");
class Main {
    static initialize() {
        if (squirrel_events_1.default.handleEvents()) {
            // squirrel event handled (except first run event) and app will exit in 1000ms, so don't do anything else
            electron_1.app.quit();
        }
    }
    static bootstrapApp() {
        app_1.default.main(electron_1.app, electron_1.BrowserWindow);
    }
    static bootstrapAppEvents() {
        electron_events_1.default.bootstrapElectronEvents();
        // initialize auto updater service
        if (!app_1.default.isDevelopmentMode()) {
            // UpdateEvents.initAutoUpdateService();
        }
    }
}
exports.default = Main;
Main.initialize();
// bootstrap app
Main.bootstrapApp();
Main.bootstrapAppEvents();
//# sourceMappingURL=main.js.map