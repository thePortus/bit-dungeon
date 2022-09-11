import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Settings } from '../../../app.settings';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  settings = Settings;
  menuLinks = [
    {
      'label': 'Home',
      'path': ''
    }, {
      'label': 'Game',
      'path': ''
    },
  ];

  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }

  navigate(path: string) {
    this._router.navigate([path]);
  }
}
