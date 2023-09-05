import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  @Input() option!: 'rock' | 'paper' | 'scissors';
  @Output() madeChoice = new EventEmitter();

  constructor(private gameService: GameService) { }

  makeDecision() {
    this.gameService.play(this.option);
    this.madeChoice.emit(this.option);
  }
}
