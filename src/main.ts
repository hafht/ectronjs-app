import { loadingBrowser } from './main/windows/LoadingBrowser';
import {app, BrowserWindow} from 'electron';




app.whenReady().then(() => {
  //Todo: check isSecondInstance

  // Load loading browser
  loadingBrowser.createWindow(async () => {
    console.log('on ready');
  });

  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      // Todo: load main browser
    }
  })
})
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
