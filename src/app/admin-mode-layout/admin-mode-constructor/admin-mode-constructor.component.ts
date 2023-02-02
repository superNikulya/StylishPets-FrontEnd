import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-mode-constructor',
  templateUrl: './admin-mode-constructor.component.html',
  styleUrls: ['./admin-mode-constructor.component.scss']
})

export class AdminModeConstructorComponent implements OnInit {
  condition: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.condition = !this.condition;
  }
}
