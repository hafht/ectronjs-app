import { Component } from '@angular/core';
import { combineLatest, delay, map, of, startWith } from 'rxjs';

@Component({
  selector: 'oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.scss'],
  
})
export class OauthComponent {
  appVersion$ = of('0.1.0');
  loginMessage$ = of('').pipe(delay(3000), startWith('hellworld'));

  vm$ = combineLatest([this.appVersion$, this.loginMessage$]).pipe(
    map(([appVersion,loginMessage ])=> ({appVersion, loginMessage})));

  constructor() {
  }

  login() {
    //@ts-ignore
    window.myAPI.updateAppVersion();
    
  }

  termOfService() {
    // this.electronService.openUrlExternal(Constants.termOfServiceUrl);
  }

  privacyAndPolicy() {
    // this.electronService.openUrlExternal(Constants.privacyUrl);
  }

  eula() {
    // this.electronService.openUrlExternal(
    //   "https://www.creativeforce.io/legal/eula/"
    // );
  }
}
