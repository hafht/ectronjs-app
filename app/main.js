"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
let mainWindow;
console.log('Process argv', process.argv);
const args = process.argv.slice(1);
const serve = args.some(val => val == '--serve');
console.log('serve', serve);
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            allowRunningInsecureContent: (serve),
        }
    });
    if (serve) {
        mainWindow.loadURL('http://localhost:4200');
    }
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
//# sourceMappingURL=main.js.map