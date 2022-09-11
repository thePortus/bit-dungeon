import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Switches, SwitchesService } from './../../../services/switches.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  switches$: Observable<Switches> | undefined;
  switches: any;

  constructor(
    public _switches: SwitchesService
  ) { }

  ngOnInit(): void {
    this.switches$ = this._switches.switches$;
    this.switches$.subscribe(result => {
      this.switches = result;
    });
  }

}
