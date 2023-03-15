import { BrowserWindow, Menu, app, nativeImage } from 'electron';
import * as path from 'path';

export class MainBrowser {
  static win: BrowserWindow;
  private static menu: Menu;
  private static serve = process.argv.some((val) => val === '--serve');

  static createWindow(ready?: () => void) {
    console.time('createMainWindow');

    this.win = new BrowserWindow({
      minWidth: 1200,
      minHeight: 800,
      width: 1200,
      height: 800,
      center: true,
      backgroundColor: '#343434',
      show: false,
      icon: nativeImage.createFromPath(path.join(__dirname, '../../renderer/favicon.ico')),
      transparent: false,
      webPreferences: {
        // webSecurity: false,
        // allowRunningInsecureContent: true,
        // nodeIntegration: true,
        // contextIsolation: false,
        // webviewTag: true,
        // backgroundThrottling: false,
      },
    });
    if (this.serve) {
      this.win.loadURL('http://localhost:4200');
    } else {
      // this.win.loadURL(Static.EnvironmentInformation.rootAppEndpoint);
    }

    this.win.once('ready-to-show', () => {
      if (ready) {
        ready();
      }
      setTimeout(() => {
        this.win.show();
      }, 50);
      console.timeEnd('createMainWindow');
    });
  }
}
