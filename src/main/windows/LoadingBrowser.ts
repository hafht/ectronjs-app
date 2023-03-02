import { BrowserWindow, app, nativeImage } from 'electron';
import * as path from 'path';

export class LoadingBrowser {
  static win: BrowserWindow;
  static createWindow(ready?: () => void) {
    this.win = new BrowserWindow({
      minWidth: 1200,
      minHeight: 800,
      width: 1200,
      height: 800,
      center: true,
      backgroundColor: '#343434',
      icon: nativeImage.createFromPath(path.join(__dirname, '../../renderer/favicon.ico')),
      frame: false,
      show: false,
      webPreferences: {
        preload: path.join(__dirname, '../base/preload.js'),
      },
    });
    const loadingFile = path.join(__dirname, '../../../resources/loading-page/loading.html');
    this.win.loadURL(`file://${loadingFile}`);
    this.win.once('ready-to-show', () => {
      this.win.show();
      this.win.webContents.send('update-app-version', app.getVersion());
      if (ready) {
        ready();
      }
    });
  }
}
