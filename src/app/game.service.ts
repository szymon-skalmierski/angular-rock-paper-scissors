import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  result = new BehaviorSubject<'player' | 'pc' | 'draw' | null>(null);
  computerDecision = new BehaviorSubject<'rock' | 'paper' | 'scissors' | null>(null);

  constructor() {}

  play(player: 'rock' | 'paper' | 'scissors') {
    if (this.result.value) {
      this.clear();
      return;
    }
    
    const decision = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
    this.computerDecision.next(decision as 'rock' | 'paper' | 'scissors');

    if (player===decision) {
      this.result.next('draw');
    } else if (player==='rock') {
      this.result.next(decision==='paper' ? 'pc' : 'player');
    } else if (player==='paper') {
      this.result.next(decision==='scissors' ? 'pc' : 'player');
    } else if (player==='scissors') {
      this.result.next(decision==='rock' ? 'pc' : 'player');
    }

    console.log(this.result.value)
  }

  clear() {
    this.computerDecision.next(null);
    this.result.next(null);
  }
}
