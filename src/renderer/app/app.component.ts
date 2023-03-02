import { HeroService } from '@services/hero.service';
import {AfterViewInit, Component} from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'electronjs-app';

  constructor(
    public hero: HeroService
  ) {
  }

  ngAfterViewInit() {
    console.log(environment.api);

  }
}
