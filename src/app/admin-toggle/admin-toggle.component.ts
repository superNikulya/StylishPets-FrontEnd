import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-toggle',
  templateUrl: './admin-toggle.component.html',
  styleUrls: ['./admin-toggle.component.scss']
})

export class AdminToggleComponent implements OnInit {
    isAdminMode: boolean = false
    constructor() { }
  ngOnInit(): void {
  }
}
