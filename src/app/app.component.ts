import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  result: 'pc' | 'player' | 'draw' | null = null;
  title = 'angular-rock-paper-scissors';

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.gameService.result.subscribe(result=>{
      this.result = result;
    })
  }
}
