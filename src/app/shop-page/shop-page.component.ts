import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  array: number[] = [12, 55, 77, 90, 45];
  theBiggest: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  without(element: any, ...args: any) {
    let obj = element//let obj = {...element}
    args.forEach((arg: any) => {
      delete obj[arg]
    })
    console.log(obj)
  }
  click(){
    this.without({name: 'John', age: 4}, 'age' )
  }
}
