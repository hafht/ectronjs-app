"use strict";
var ipcRenderer = require("electron").ipcRenderer;

function ready(callback) {
  if (document.readyState != 'loading') callback();
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  else document.attachEvent('onreadystatechange', function () {
    if (document.readyState == 'complete') callback();
    });
}
ready(function () {
  console.log(ipcRenderer);

  var currentYearElement = document.getElementById('current-year');
  currentYearElement.innerText = new Date().getFullYear();

  var appVersionElement = document.getElementById('app-version');
  ipcRenderer.on('update-app-version', (ev, arg) => {
    appVersionElement.innerText = arg;
  });

  var statusHtmlElement = document.getElementById('loading-message');
  ipcRenderer.on('download-update-progress', (ev, arg) => {
    statusHtmlElement.innerHTML = `
    Version ${arg.version} has just been released. 
    <br>Please wait for downloading, then restart Kelvin to install the update.
    <br>${arg.downloadedPercent > 0 ? ` (downloaded ${arg.downloadedPercent}%)` : ''}
    `;
  });
  ipcRenderer.on('download-update-done', (ev, arg) => {
    if (arg.isSuccess) {
      statusHtmlElement.innerHTML = `
    Version ${arg.version.version} is ready to install 
    <br>Please restart Kelvin to install the update.
    `;
      var buttonRestart = document.getElementById('restart-button');
      var restartCoundDownHtmlElement = document.getElementById('restart-after');
      buttonRestart.style.display = 'block';
      restartCoundDownHtmlElement.style.display = 'block';
      var countdownTime = 60;
      restartCoundDownHtmlElement.innerHTML = `Kelvin will auto-restart in <span>${countdownTime}</span> seconds.`;
      var countDownInterval = setInterval(() => {
        countdownTime--;
        restartCoundDownHtmlElement.innerHTML = `Kelvin will auto-restart in <span>${countdownTime}</span> seconds.`;
        if (countdownTime === 0) {
          clearInterval(countDownInterval);
          restartToUpdate();
        }
      }, 1000);
    } else {
      setTimeout(() => {
        ipcRenderer.send('check-for-update');
      }, 1000);
    }
  });
});
function restartToUpdate() {
  ipcRenderer.send('restart-to-install-update');
}
