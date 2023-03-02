import { IpcRendererEvent, contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  onUpdateAppVersion: (listener: (event: IpcRendererEvent, ...args: any[]) => void) => ipcRenderer.on('update-app-version', listener)
});
