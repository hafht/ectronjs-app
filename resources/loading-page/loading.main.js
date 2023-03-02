'use strict';

function ready(callback) {
  if (document.readyState != 'loading') callback();
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  else
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState == 'complete') callback();
    });
}
ready(function () {
  const currentYearElement = document.getElementById('current-year');
  currentYearElement.innerText = new Date().getFullYear();
  const appVersionElement = document.getElementById('app-version');
  versions.onUpdateAppVersion((event, arg) => {
    appVersionElement.innerText = arg;
  });
});
