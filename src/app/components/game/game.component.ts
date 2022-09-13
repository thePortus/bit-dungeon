import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Switches, SwitchesService } from './../../services/switches.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(
    private _switches: SwitchesService
  ) { }

  ngOnInit(): void {
    this._switches.setRandom();
  }

}
