import { Component, OnInit } from '@angular/core';
import {of, map, Observable, concatAll, switchAll, interval, switchMap, mergeAll} from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
  }
  click(){

    const switched = of(1, 2, 3)
      .pipe(
        switchMap(x => of(x, x ** 2, x ** 3)));
    switched.subscribe(x => console.log(x));
  }
}
