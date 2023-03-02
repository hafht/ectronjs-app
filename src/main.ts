import {app, BrowserWindow} from 'electron';
import { loadingBrowser, mainBrowser } from './main/windows';




app.whenReady().then(() => {
  //TODO: check isSecondInstance

  // Load loading browser
  loadingBrowser.createWindow(async () => {
    // : send tracking
    try {
      //TODO: start up
      mainBrowser.createWindow(() => {
        loadingBrowser?.win?.destroy();
      })
    } catch (error) {

    }
  });

  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      // TODO: load main browser
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
