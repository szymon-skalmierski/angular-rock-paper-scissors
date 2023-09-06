import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit, OnDestroy {
  resultSub!: Subscription;
  decision: 'rock' | 'paper' | 'scissors' | null = null;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.playerDecision.subscribe((val)=>{
      this.decision = val;
    })
  }

  ngOnDestroy(): void {
    this.resultSub.unsubscribe();
  }
}
