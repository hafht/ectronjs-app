"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const windows_1 = require("./main/windows");
electron_1.app.whenReady().then(() => {
    //TODO: check isSecondInstance
    // Load loading browser
    windows_1.loadingBrowser.createWindow(async () => {
        // : send tracking
        try {
            //TODO: start up
            windows_1.mainBrowser.createWindow(() => {
                windows_1.loadingBrowser?.win?.destroy();
            });
        }
        catch (error) {
        }
    });
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            // TODO: load main browser
        }
    });
});
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=main.js.map