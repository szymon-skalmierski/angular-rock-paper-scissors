import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-opponent',
  templateUrl: './opponent.component.html',
  styleUrls: ['./opponent.component.scss']
})
export class OpponentComponent implements OnInit {
  computerDecision: 'rock' | 'paper' | 'scissors' | null = null;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.computerDecision.subscribe((decision)=>{
      this.computerDecision = decision;
    })
  }
  clear() {
    this.gameService.clear();
  }
}
