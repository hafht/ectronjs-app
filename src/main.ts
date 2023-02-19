import {app, BrowserWindow, nativeImage} from 'electron';

let mainWindow: BrowserWindow | null;

console.log('Process argv', process.argv);

const args = process.argv.slice(1);
const serve = args.some(val => val == '--serve');
console.log('serve', serve)

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: (serve),

    }
  });

  if(serve) {
    mainWindow.loadURL('http://localhost:4200');
  }

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}


app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
