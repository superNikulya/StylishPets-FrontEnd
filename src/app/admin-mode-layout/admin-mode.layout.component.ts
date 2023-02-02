import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-admin-mode',
    templateUrl: './admin-mode.layout.component.html',
    styleUrls: ['./admin-mode.layout.component.scss']
})

export class AdminModeLayoutComponent implements OnInit {

    links = [
        {url: 'admin-categories', name: 'change categories'},
        {url: 'admin-mode-products', name: 'change products'},
        {url: 'admin-categories/new', name: 'add a new category'}
    ]

    constructor(
        private http: HttpClient,
        ) { }

    ngOnInit(): void {
    }
}
