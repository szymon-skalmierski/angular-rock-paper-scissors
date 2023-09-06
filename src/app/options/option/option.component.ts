import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() option!: 'rock' | 'paper' | 'scissors';

  constructor(private gameService: GameService) { }

  makeDecision() {
    this.gameService.play(this.option);
  }
}
