import { HeroService } from '@services/hero.service';
import {AfterViewInit, Component} from '@angular/core';

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
    console.log('heheh')
  }
}
