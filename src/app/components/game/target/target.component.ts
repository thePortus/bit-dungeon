import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Switches, SwitchesService } from './../../../services/switches.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})
export class TargetComponent implements OnInit {

  target$: Observable<number> | undefined;
  target: any;

  constructor(
    private _switches: SwitchesService
  ) { }

  ngOnInit(): void {
    this.target$ = this._switches.target$;
    this.target$.subscribe(result => {
      this.target = result;
    });
  }

}
